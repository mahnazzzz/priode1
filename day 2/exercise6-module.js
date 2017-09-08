var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, cb) {

    fs.readdir(dir, function(err, list) {
        if (err) {
            cb(err)
        } else {
            var filteredList = list.filter(function(file) {
                if (path.extname(file) === '.' + ext) {
                    return file
                }
            }) 
            cb(null, filteredList)
        }
    })
}