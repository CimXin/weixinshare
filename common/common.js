'use strict';
const request = require('request');
const fs = require('fs');
const getToken = require("../routes/getToken");

const getTicket = function (access_token) {
    let requrl = "http://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=";
    let options = {
        method: 'get',
        url: requrl + access_token
    };

    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (res) {
                resolve(JSON.parse(body));
            } else {
                reject(err);
            }
        })
    })
};

const saveToken = function () {
    getToken(function (data) {
        getTicket(data).then(res => {
            let token = res['ticket'];
            fs.writeFile('./ticket', token, function (err) {
                console.log("写入ticket成功", err);
            });
        })
    });
};

const refreshToken = function () {
    saveToken();
    setInterval(function () {
        saveToken();
    }, 7000 * 1000);
};

module.exports = refreshToken;