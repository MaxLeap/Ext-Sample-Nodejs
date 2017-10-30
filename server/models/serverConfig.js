const _ = require('lodash');

// 内存变量, 用于存放配置数据
let serverConfig = {
    switchDemo: false,  // 开关示例
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