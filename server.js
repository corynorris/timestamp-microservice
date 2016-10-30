var favicon = require('serve-favicon');
var url = require('url');
var http = require('http');
var moment = require('moment');

var port = process.env.PORT || process.argv[2] || 3000;
var _favicon = favicon(__dirname + '/public/favicon.ico');

var server = http.createServer(function(req, res) {
    _favicon(req, res, function onNext(err) {
        var parsedUrl = url.parse(req.url, true);
        var time = parsedUrl.pathname;
        if (time && (time[0] === '/')) {
            time = time.substring(1);
        }
        time = decodeURIComponent(time);
        if (/^\d{8,10}$/.test(time)) {
            myDate = moment(time, "X");
        } else {
            myDate = moment(time, "MMMM D, YYYY");
        }

        if (myDate.isValid()) {
            res.end(JSON.stringify({
                unix: myDate.format("X"),
                natural: myDate.format("MMMM D, YYYY")
            }));
        } else {
            res.end(JSON.stringify({
                unix: null,
                natural: null
            }));
        }
    });
}).on('error', console.error);

server.listen(port);
