var http = require('http')
var url = require('url')
var port = process.argv[2]

http.createServer(function (request, response) {
    var urlObject = url.parse(request.url, true) // true makes query into an object 
    var startTime = urlObject.query.iso //here's where query needs to be an object
    var result  //nothing here for now

    if (urlObject.pathname === '/api/unixtime') {
        result = { unixtime: Date.parse(startTime) }
    } 
    else if (urlObject.pathname === '/api/parsetime') {
        var date = new Date(Date.parse(startTime));
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    }

    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }

}).listen(port)
