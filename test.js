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

const choco = (chocolateCakes, oldStatus, newStatus) =>
    chocolateCakes.map(cake => {
        if (cake.status === oldStatus) cake.status = newStatus;
        return cake;
    });
var soldOut = choco(chocolateCakes, 'available', "sold out !");
console.log(soldOut);