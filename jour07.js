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
*/
//04 - Filter Numbers
var array = [1, "toto", 34, "javascript", 8];

var numbers = array.filter(function(item) {
    return (parseInt(item) === item);
});


console.log(numbers);