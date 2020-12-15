//01 - Calculator

function calculate(num1, num2, oparetor) {
    if (oparetor == "+") {
        return num1 + num2
    } else if (oparetor == "-") {
        return num1 - num2;
    } else if (oparetor == "*") {
        return num1 * num2;
    } else if (oparetor == "/") {
        return num1 / num2;
    } else if (oparetor == "%") {
        return num1 % num2;
    } else {
        return error;
    }
}
var tolat = calculate(5, 4, '*');
console.log(tolat);