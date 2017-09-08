var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myMap = function (callback) {
    var arr = Object(this)  
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i])
    }

    return newArr
}

console.log(names.myMap(function (name) {
    return name.toUpperCase()
}))

Array.prototype.myFilter = function (callback) {
    var arr = Object(this)
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(callback(arr[i]))
        }
    }

    return newArr
}

console.log(names.myFilter(function (name) {
    if (name.length <= 3) {
        return name
    }
}))