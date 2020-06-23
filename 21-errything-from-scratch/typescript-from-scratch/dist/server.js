"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
var server = http_1.createServer(function (req, res) {
    switch (req.url) {
        case '/':
            fs_1.readFile('client/index.html', function (err, data) {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            });
            break;
        case '/scripts/main.js':
            fs_1.readFile('dist/client/scripts/main.js', function (err, data) {
                res.setHeader('Content-Type', 'text/javascript');
                res.end(data);
            });
            break;
        default:
            break;
    }
});
server.listen(3000, function () {
    console.log('I swear I am listening!!!');
});
//# sourceMappingURL=server.js.map