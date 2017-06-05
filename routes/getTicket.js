'use strict';
const fs = require("fs");

function getTicket(next) {
   fs.readFile("./ticket","utf-8",function (err,data) {
       next(data);
   })
}

module.exports = getTicket;