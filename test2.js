//03 - Palindrome
var checkPal = function(string) {
    var str = string.split('').reverse().join('')
    if (string = str) {
        return "Palindrome !";
    } else {
        return "Nope";
    }
}
var check = checkPal("racecar");
console.log(check);