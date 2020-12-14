//06 - Time

function format(num) {
    var hours = Math.floor(num / 3600);
    num %= 3600;
    var minutes = Math.floor(num / 60);
    var seconds = num % 60;
    console.log(`${hours}:${minutes}:${seconds}`)
}
format(3700);