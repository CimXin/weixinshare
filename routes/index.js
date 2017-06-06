'use strict';
// const Api = require("wechat-api");
const express = require('express');
const router = express.Router();
const config = require("../config/config");
// const api = new Api(config.wechat.appid, config.wechat.appSecret);
const sign = require("./sign");
// const getToken = require("./getToken");
const getTicket = require('./getTicket');

router.get("/test", function (req, res, next) {
    console.log("打印",req.query.url);
    getTicket(function (data) {
        let ret = sign(data, config.gameUrl);
        console.log(ret);
        res.send(ret);

    })
});

module.exports = router;
