'use strict';
const Api = require("wechat-api");
const express = require('express');
const router = express.Router();
const config = require("../config/config");
const api = new Api(config.wechat.appid, config.wechat.appSecret);
const sign = require("./sign");
const getToken = require("./getToken");

router.get("/getConfig", function (req, res, next) {
    var params = {
        debug: true,
        jsApiList: [
            "onMenuShareTimeline",
            "onMenuShareAppMessage"
        ],
        url: req.query.url
    };

    api.getJsConfig(params, function (err, result) {
        console.log(result);
        res.send(result);
    });
});

router.get("/test", function (req, res, next) {
    getToken(function (data) {
        res.send({test: data});
    })

});

module.exports = router;
