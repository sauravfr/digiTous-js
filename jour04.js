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

// 03 - Even

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even number.`);
    } else {
        console.log(`${num} is odd number.`)
    }
    return num;

}
checkIfEven(10);

//04 - Compare

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else {
        console.log(`${num2} is bigger`);
    }
    return;
}
compare(20, 3);