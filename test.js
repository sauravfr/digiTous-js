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
    return { name: obj.firstName + obj.lastName }
})
console.log(shortNames);