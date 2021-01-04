var fs = require('fs');

//01 - File System
/*fs.readFile("./jour07.txt", (error, data) => {
    console.log(error);
    console.log(data.toString());
})


//02 - Map Double
var array = [1, 2, 3, 4, 5];

var double = array.map(function(num) {
    return num * 2
})

console.log(double);

//03 - Map Names
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
    return "Name:" + [obj.firstName] + " " + [obj.lastName];
})
console.log(shortNames);

//04 - Filter Numbers
var array = [1, "toto", 34, "javascript", 8];

var numbers = array.filter(function(item) {
    return (parseInt(item) === item);
});
console.log(numbers);

//05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(num) {
    return num % 2 === 0;
})

console.log(even);
*/
//06 - Cakes
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
var chocolateCakes = [];
var chocolateCake = cakes.filter(function(cake) {
    if (cake.flavor === "chocolate") { chocolateCakes.push(cake); }
})

var choco = ((chocolateCakes, oldStatus, status) => {
    chocolateCakes.map(item => {
        if (item.status === oldStatus) {
            item.status = status;
            return item.status;
        } else {
            return item;
        }
    });
    console.log(chocolateCakes);
});

var soldOut = choco(chocolateCakes, 'available', "sold out !");

console.log(soldOut);