<template>
  <div id="app">
    <div>
      <loading :show="loading" text="loading..."></loading>
      <msg v-if="showError" :title="errorMessage" icon="warn"></msg>
      <group title="DEBUG">
          <cell title="用户状态:" :value="statusText"></cell>
          <cell title="服务器配置 mode:" :value="serverConfig.mode"></cell>
      </group>
    </div>
    <div>
      <div>
        <loading :show="loading" text="loading..."></loading>
      </div>

      <group title="Books">
        <div v-for="book in books">
          <cell :title="book.title" :value="book.price+'元'"></cell>
        </div>
      </group>

      <group title="自定义协议">
        <cell title="登录页面" value="演示不同平台下的链接跳转" :link="loginLink" is-link></cell>
      </group>

      <tabbar v-if="!isNative">
        <tabbar-item selected v-for="item in appConfig.menu.h5Tab" :link="item.h5Url">
          <img slot="icon" :src="item.iconUrl">
          <span slot="label">{{item.title}}</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
  import {
     Loading, Toast,Msg,Group, Cell, Tabbar, TabbarItem
  } from 'vux';
  import axios from 'axios';
  import _ from 'lodash';
  const queryString = require('query-string');
  import {leapCloudApiPrefix, extApiPrefix , appConfigUrl} from './constants';

  export default {
    name: 'app',
    components: {
      Toast,
      Loading,
      Msg,
      Group, Cell,
      Tabbar, TabbarItem
    },
    data() {
      return {
        auth: {
          appId: "",
          sessionToken: "",
          userId: "",
          platform: ""
        }, // 一些和认证相关的信息
        loading: true,
        books: [],  // book 列表
        showError: false,
        errorMessage: "",
        serverConfig:{},
        statusText:"loading...",
        showTabBar: true, //是否显示 tabbar
        user: {},  //用户信息,
        appConfig:{
          menu:{
            h5Tab:[]
          },
          h5UrlInfo:{
            prefix:""
          }
        }
      }
    },
    computed: {
      loginLink:function () { // 根据平台决定跳转地址
        if (this.isNative) {
          // 客户端
          return  "https://www.maxwon.cn/member";
        } else {
          // h5
          return `/maxh5/login?return_uri=${window.location.href}`;
        }
      },
      isSessionTokenValid: function () { // sessionToken 是否合法
        const result = this.auth.sessionToken && (this.auth.sessionToken != "");
        return !!result;
      },
      isNative: function () {  // 是否在客户端中
        let platform = this.auth.platform;
        if(!platform || platform==""){
          return false
        }
        platform = platform.toLowerCase();
        return  platform == "ios" || platform == "android";
      },
      leapCloudReqHeaders: function () {  //leapcloud 请求的 headers
        let headers = {
          "Content-Type": "application/json",
          "X-ML-AppId": this.auth.appId,
          "X-ML-Session-Token": this.auth.sessionToken,
        }
        if(_.has(this.serverConfig,'apiKey') && this.serverConfig.apiKey != ""){
          headers["X-ML-ApiKey"] = this.serverConfig.apiKey;
        }
        return headers;
      }
    },
    async created() {
      await this.parseQueryString();
      this.setStatusText();
      this.setPlatformInfo();
      await Promise.all([this.fetchServerConfig(),this.fetchAppConfig(),this.fetchBooks()]);
    },
    methods: {
      /**
       * 设置平台相关信息
       */
      async setPlatformInfo() {
        if (this.isNative) {
          // 客户端
          this.showTabBar = false;
        } else {
          // h5
          this.showTabBar = true;
        }
      },
      /**
       * 解析 url 中的参数
       */
      async parseQueryString() {
        const query = queryString.parse(location.search);
        const {maxleap_appid, maxleap_sessiontoken, maxleap_userid, platform} = query;
        debugger
        if(!maxleap_appid || maxleap_appid==""){
          const errMsg = "parseQueryString error: url 中 appId 不能为空.";
          this.loading = false;
          this.showErrorMsg(errMsg);
//          throw new Error(errMsg);
          return;
        }
        this.auth.appId = maxleap_appid;
        this.auth.sessionToken = maxleap_sessiontoken;
        this.auth.userId = maxleap_userid;
        this.auth.platform = platform;
      },
      /**
       * 设置当前状态文字
       */
      setStatusText(){
        if(!this.isSessionTokenValid){
          this.statusText = "当前未登录";
        }else{
          this.statusText = "当前已经登录";
        }
      },
      /**
       * 获取服务器配置
       * @param cb 回调
       */
      async fetchServerConfig() {
        let self = this;
        self.loading = true;
        return axios.get(`${extApiPrefix}/api/serverConfig`)
          .then(function (response) {
            self.loading = false;
            self.serverConfig = response.data;
          })
          .catch(function (error) {
            self.loading = false;
            const message = self.getErrorMsg(error);
            self.showErrorMsg("fetchServerConfig error: " + message);
          });
      },
      /**
       * 获取应用信息
       * @param cb 回调
       */
      async fetchAppConfig() {
        let self = this;
        // 没有 appId
        if(!self.auth.appId){
          return false
        }
        self.loading = true;
        return axios.get(appConfigUrl,{
          headers:this.leapCloudReqHeaders
        })
          .then(function (response) {
            self.loading = false;
            self.appConfig = response.data;
          })
          .catch(function (error) {
            self.loading = false;
            self.showErrorMsg("fetchAppConfig error: " + message);
          });
      },
      /**
       * 获取Book信息
       */
      async fetchBooks() {
        let self = this;
        self.loading = true;
        const url = `${extApiPrefix}/api/books`;
        return axios.get(url).then(function (response) {
          self.loading = false;
          self.books = response.data;
        })
          .catch(function (error) {
            self.loading = false;
            const message = self.getErrorMsg(error);
            self.showErrorMsg("fetchBooks error: " + message);
          });
      },
      /**
       * 显示错误消息
       * @param msg
       */
      showErrorMsg(msg) {
        let self = this;
        self.showError = true;
        self.errorMessage = msg;
      },
      getErrorMsg(error){
        let message = error.message;
        if(error.response){
          message = error.response.status + " " + JSON.stringify(error.response.data);
        }
        return message;
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
