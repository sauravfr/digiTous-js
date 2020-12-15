// 02 - Table

function multiply(number) {
    for (var i = 0; i <= 10; i++) {
        result = number * i;
        console.log(number + " * " + i + " = " + result);
    }
}
console.log(multiply(process.argv[2]));