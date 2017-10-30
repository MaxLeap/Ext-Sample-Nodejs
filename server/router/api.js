let {get: getServerConfig,update: updateServerConfig} = require("../models/serverConfig");

const {
    create,
    list,
    getBookById,
    update,
    deleteById
} = require("../models/book");

function addApiRoutes(router) {
    // API
    // 获取配置数据
    router.get(`/api/serverConfig`, async (ctx) => {
        ctx.body = getServerConfig();
    });

    // 修改配置数据
    router.put(`/api/serverConfig`, async (ctx) => {
        ctx.body = updateServerConfig(ctx.request.body);
    });

    // books crud
    // list
    router.get(`/api/books`, async (ctx) => {
        ctx.body =  list();
    });
    // getBookById
    router.get(`/api/books/:id`, async (ctx) => {
        ctx.body = getBookById(ctx.params.id);
    });
    // create
    router.post(`/api/books`, async (ctx) => {
        ctx.body = create(ctx.request.body);
    });
    // update
    router.put(`/api/books/:id`, async (ctx) => {
        ctx.body = update(ctx.request.body, ctx.params.id);
    });
    // deleteById
    router.delete(`/api/books/:id`, async (ctx) => {
        ctx.body = deleteById(ctx.params.id);
    });
}

module.exports = {
    addApiRoutes,
}