var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
var kortNames = names.filter(function (name) {
    if (name.length <= 3) {
        return name
    }
})

var uppercaseNames = names.map(function (name) {
    return name.toUpperCase();
})