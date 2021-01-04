/*var fs = require('fs');

console.log("01 - File System")
fs.readFile("./jour07.txt", (error, data) => {
    console.log(error);
    console.log(data.toString());
})*/


console.log("02 - Map Double")
var array = [1, 2, 3, 4, 5];

var double = array.map(function(num) {
    return num * 2
})

console.log(double);

console.log("03 - Map Names")
var longNames = [{
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
];
var shortNames = longNames.map(function(obj) {
    return { name: obj.firstName + " " + obj.lastName }
})
console.log(shortNames);

console.log("04 - Filter Numbers")
var array = [1, "toto", 34, "javascript", 8];

var numbers = array.filter(function(item) {
    return (parseInt(item) === item);
});
console.log(numbers);

console.log("05 - Filter Even")

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(num) {
    return num % 2 === 0;
})

console.log(even);

console.log("06 - Cakes")
var cakes = [{
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
];

var soldOut = cakes.filter(cake => {
    if (cake.flavor == "chocolate") {
        return true;
    }
}).map(cake => {
    if (cake.flavor === "chocolate") {
        cake.status = "sold out!"
        return cake
    }

})
console.log(soldOut);