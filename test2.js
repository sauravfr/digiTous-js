//05 - Add Up

function addUp(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
var totel = addUp(12);
console.log(totel);