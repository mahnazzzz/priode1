var module = require('./exercise6-module')

module(process.argv[2], process.argv[3], function(err, list) {
    if (err) {
        console.log("ERROR")
    } else {
        list.forEach(function(file) {
            console.log(file)
        })
    }
})