/**
 * Created by yaowan on 2017/6/6.
 */
const fs = require('fs');

function getCacheToken() {
    fs.readFile("../../weixinnode/token","utf-8",function (err,data) {
        next(data);
    });
}
module.exports = getCacheToken;