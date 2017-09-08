var http = require('http')

http.get(process.argv[2], function(response) {
    response.on("data", console.log).setEncoding('utf8')
})