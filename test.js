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