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

    <group title="User">
        <cell title="登录" :link="{path:'/login',query:$router.query}" is-link></cell>
    </group>

    <tabbar v-if="!$parent.isNative">
      <tabbar-item selected v-for="item in $parent.appConfig.menu.h5Tab" :link="$parent.h5UrlPrefix+item.h5Url">
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
    data() {
      return {
        loading: false,
        showError: false,
        errorMessage: "",
        books: []
      }
    },
    async created() {
      await this.fetchBooks();
    },
    methods: {
      /**
       * 获取用户信息
       */
      async fetchBooks() {
        let self = this;
        self.loading = true;
        const url = `${extApiPrefix}/leapcloud_ext_demo/api/books`;
        return axios.get(url).then(function (response) {
          self.loading = false;
          self.books = response.data;
        })
        .catch(function (error) {
          self.loading = false;
          const message = error.response.status + " " + JSON.stringify(error.response.data);
          self.$parent.showErrorMsg("fetchBooks error: " + message);
        });
      },
    }
  }
</script>
