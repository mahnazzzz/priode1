/* 
var arr = ["lars", "peter", "mahnaz", "bo", "per"]

var newArray = arr.filter(function(name){
    if (name.length <= 3) {
        return name
    }
})

console.log(newArray[1])



function myFilter(array, callback) {
    var filteredArray
    for (var index = 0; index < filteredArray.length; index++) {
        
        
    }
} */


/* var fs = require ('fs')
var path = process.argv[2]
var file = fs.readFileSync(path)
var str = file.toString()
var lines = str.split('\n')
console.log(lines.length -1)
//console.log(str) */

/* var fs = require('fs')
var path = process.argv[2]
fs.readFile(path, function callback(err,data){
    if (err){
        console.log('ERROR')
    } else{
        console.log(data.toString().split('\n').length -1)
    }
}) */


/* 
var number = [1,2,3,4];
var times10 = number.map(function(num){
    return num* 10;
}) */ 


/* function map(arr, callback){
    var temp = [];
    for (var i =0; i< arr.lenght; i++){
        temp [i]= callback(arr[i]);
    }
    return temp;
} */

/* var times10 = map(number,(numb)=> numb*10);
console.log(times10);

var fs = require('fs')
var path =require('path')

var dir = process[2]
var ext ='.'+process[3]

fs.readdir(dir, function callback(err, data){
    if (err){

    }
}) */

/* var numbers = [2,3,67,33];
console.log(numbers.join("-"));

var reducer = function (accumulator, item){return accumulator +item;
}

var initialValue =0;
var result = nubers.reduce(reducer,initialValue);
console.log(result)

numbers.reduce( ); */

/* var members =[
    {name: "Peter", age:18},
    {name: "jan", age:35},
    {name: "Janne", age:22},
    {name: "Martin", age:33},
]

var reducer = function (accumulator, member){
    var temp = accumulator + member.age;
    if(index === arr.length-1){
        return temp/ arr.length;
    }
    return temp;
};

var initialValue = 0;

result */

var names = ["Lars", "Peter", "Jan", "Bo"];

var list = names.map(function (name){
    return '<li>' + name + '</li>'
})

console.log ('<ul>\n' + list.join('\n')+ '\n</ul>') 


