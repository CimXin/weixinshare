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
    console.log("打印", req.query.url);
    getTicket(function (data) {
        let ret = sign(data, req.query.url);
        console.log(ret);
        res.send(ret);

    })
});

router.get("/games/ttw/MP_verify_K93IutgzdBc0FC8B.txt", function (req, res, next) {
    // res.redirect("http://127.0.0.1:5566/MP_verify_K93IutgzdBc0FC8B.txt");
    res.redirect(config.gameEnter + "MP_verify_K93IutgzdBc0FC8B.txt");
    res.end();
});

router.get("/games/ttw", function (req, res, next) {
    // res.redirect("http://127.0.0.1:5566/MP_verify_K93IutgzdBc0FC8B.txt");
    res.redirect(config.gameEnter + "/login.html");
    res.end();
});

router.get("/test1",function (req,res,next) {
    res.redirect("/images/test.html")
});

module.exports = router;
