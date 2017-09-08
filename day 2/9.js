var http = require('http')
var bl = require('bl') //BufferList

var results = []
var count = 0

var urls = process.argv.slice(2) //dont need the first two

function printResults() {
    for (var i = 0; i < urls.length; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(urls[index], function(response) {
        response.pipe(bl(function(err, data) {
            if(err) {
                return console.error(err)
            }
            results[index] = data.toString()
            count++
            if (count === urls.length) {
                printResults()
            }
        }))
    })
}

for (var i = 0; i < urls.length; i++) {
    httpGet(i)
}