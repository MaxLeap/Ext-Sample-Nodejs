<template>
  <div>
      <msg :title="title" :buttons="loginMsgButtons" icon="info"></msg>
  </div>
</template>

<script>
  import {
     Msg
  } from 'vux';
  export default {
    components: {
      Msg,
    },
    computed: {
      loginLink:function () {
        if (this.$parent.isNative) {
          // 客户端
          return  "https://www.maxwon.cn/member";
        } else {
          // h5
          return `${this.$parent.h5UrlPrefix}/login?return_uri=${window.location.href}`;
        }
      },
      loginMsgButtons: function () {
        return [{
          type: 'primary',
          text: '点我跳转到 LeapCloud 登录',
          link: this.loginLink
        }];
      },
    },
    data() {
      return {
        title: "演示在客户端及 h5 不同环境下的链接跳转"
      }
    }
  }
</script>
