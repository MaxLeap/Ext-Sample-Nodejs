const _ = require('lodash');

// 内存变量, 用于存放配置数据
let serverConfig = {
    switchDemo: false,  // 开关示例
    mode: 'B2B2C',
    info: 'test'
};

// 获取
function get() {
    return serverConfig
}

// 更新
function update(params) {
    serverConfig = _.merge(serverConfig,params); // 支持部分更新
    return serverConfig
}

module.exports = {
    get,
    update
}