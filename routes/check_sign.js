var sign = require('./sign.js');
var getToken = require("./getToken");

var getTicket = function (next) {
    getToken(function (data) {
        console.log(data);

    });    
};

module.exports = getTicket;

console.log(sign('jsapi_ticket', 'http://example.com'));
/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */
