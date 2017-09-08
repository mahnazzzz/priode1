//a
var all = ["Lars", "Peter", "Jan", "Bo"]
var joinedNames = all.join(', #')

console.log(joinedNames)

//b
var numbers = [2, 3, 67, 33]

var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log(sum)

//c
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
]

var avg = members.reduce(function (accumulator, currentValue, index, arr) {
    if (accumulator === arr[0]) {
        return accumulator.age + currentValue.age
    }
    if (index === arr.length - 1) {
        return (accumulator + currentValue.age) / arr.length
    }
    return accumulator + currentValue.age
})

console.log(avg)
