const _ = require('lodash');

// 内存变量, 用于存放配置数据
let serverConfig = {
    allowGuest: false,  // 是否允许以游客模式访问
    mode: 'B2B2C',
    info: 'test'
};

function get() {
    return serverConfig
}

function update(params) {
    serverConfig = _.merge(serverConfig,params);
    return serverConfig
}
module.exports = {
    get,
    update
}