// 03 - Even

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even number.`);
    } else {
        console.log(`${num} is odd number.`)
    }
    return num;

}
checkIfEven(10)