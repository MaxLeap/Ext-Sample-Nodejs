const {UrlPrefix} = require("../constants");
const Router = require('koa-router');

const router = new Router({
    prefix: UrlPrefix // url 前缀
});

const { addRootRoutes } = require("./root");
const { addApiRoutes } = require("./api");

addRootRoutes(router);
addApiRoutes(router);

module.exports = {
    router
}