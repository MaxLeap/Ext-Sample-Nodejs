// 依赖
const Koa = require('koa');
const app = new Koa();
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const { router } = require('./router');
const {UrlPrefix} = require("./constants");

// 中间件
onerror(app);
app.use(bodyParser());
app.use(require('koa-static-server')({
    rootDir:__dirname + '/../static/',
    rootPath:`${UrlPrefix}/static/`
}))
// 允许跨域访问
app.use(cors({
    origin:"*"
}));

// 异常处理
process.on('uncaughtException', function (err) {
    console.error('Error caught in uncaughtException event:', err.stack);
});

process.on('unhandledRejection', function (reason, p) {
    console.log('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

app.use(router.routes())
    .use(router.allowedMethods());

// 启动
const port = 3000; // 端口
app.listen(port,function () {
    console.log('demo server listening at http://127.0.0.1:%s', port);
});

