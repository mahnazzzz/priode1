var http = require('http')
var map = require('through2-map') // like map for arrays
var port = process.argv[2]

http.createServer(function(request, response) {
    if (request.method === 'POST') { //check if POST
        request.pipe(map(function(data) { 
            return data.toString().toUpperCase()
        })).pipe(response)
    }
}).listen(port)