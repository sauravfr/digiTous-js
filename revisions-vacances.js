//02 - Compter les voyelles

function countvowels(str) {

    var count = str.match(/[aeiou]/gi).length;

    return count;
}

var result = countvowels("JavaScript program");

console.log(result);

//03 - Langage codé

function secretCode(str) {
    return str.replace(/./g, function(c) {
        return ('00' + c.charCodeAt(0) - 86);
    });
}
console.log(secretCode("secret")); // affichera 291513281530*/