function myFilter(array, callback) {
    var filteredArray = []

    array.forEach(function (element) {
        if (callback(element)) {
            filteredArray.push(element)
        }
    })

    return filteredArray
}
function myMap(array, callback) {
    var mappedArray = []

    array.forEach(function (element) {
        mappedArray.push(callback(element))
    })

    return mappedArray
}