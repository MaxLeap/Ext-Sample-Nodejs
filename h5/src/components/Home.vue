<template>
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

    <tabbar v-if="!$parent.isNative">
      <tabbar-item selected v-for="item in $parent.appConfig.menu.h5Tab" :link="item.h5Url">
        <img slot="icon" :src="item.iconUrl">
        <span slot="label">{{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {
    Loading, Msg, Tabbar, TabbarItem, Group, Cell
  } from 'vux';
  import axios from 'axios';
  import { extApiPrefix } from '../constants';

  export default {
    components: {
      Loading, Msg, Tabbar, TabbarItem, Group, Cell
    },
    computed: {
      loginLink:function () { // 根据平台决定跳转地址
        if (this.$parent.isNative) {
          // 客户端
          return  "https://www.maxwon.cn/member";
        } else {
          // h5
          return `/maxh5/login?return_uri=${window.location.href}`;
        }
      }
    },
    data() {
      return {
        loading: false,
        showError: false,
        errorMessage: "",
        books: []  // book 列表
      }
    },
    async created() {
      await this.fetchBooks();
    },
    methods: {
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
          const message = this.$parent.getErrorMsg(error);
          self.$parent.showErrorMsg("fetchBooks error: " + message);
        });
      },
    }
  }
</script>
