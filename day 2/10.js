var net = require('net')

var server = net.createServer(function (socket) {
    socket.end(getFormattedDate() + '\n')
})
server.listen(process.argv[2])

//returns today's date
function getFormattedDate() {
    var today = new Date()

    return today.getFullYear() + '-'
        + formatNumber(today.getMonth() + 1) + '-'
        + formatNumber(today.getDate()) + ' '
        + formatNumber(today.getHours()) + ':'
        + formatNumber(today.getMinutes())

}

//adds a zero infront of single digit numbers
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}