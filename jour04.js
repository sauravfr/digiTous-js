//01 - Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}

console.log(cat);
console.log(cat.age);
if (cat.isCute === true) {
    console.log("So cute !");
}

//02 - Combine

var cat2 = {
    name: "Tiger",
    age: 4,
    isCute: true
}

var cats = [cat, cat2];
console.log(cats);
console.log(cat2.age);
console.table(cats);
if (cat2.isCute == true) {
    console.log("So cute !");
}