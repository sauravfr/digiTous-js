//03 - Separate Table
function multiply(number) {
    for (var i = 0; i <= 10; i++) {
        result = number * i;
        console.log(number + " * " + i + " = " + result);
    }
}
console.log(multiply(process.argv[2]));

function addition(number) {
    var num = parseInt(number)
    for (var i = 0; i <= 10; i++) {
        result = num + i;
        console.log(num + " + " + i + " = " + result);
    }
}
console.log(addition(process.argv[2]));

module.exports = {
    multiply,
    addition
};