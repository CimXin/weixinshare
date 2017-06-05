'use strict';
const request = require('request');
function getTicket(access_token) {
    let requrl = "http://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=";
    let options = {
        method: 'get',
        url: requrl + access_token
    };

    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (res) {
                resolve(body);
            } else {
                reject(err);
            }
        })
    })

}

module.exports = getTicket;