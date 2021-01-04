//01 - Alphabet
function sortLetters(text) {
    text = text.split("");
    text = text.sort();
    text = text.join("");
    console.log(text);
}
sortLetters("konexio");

/*//02 - XOXO
function countEach(string) {
    var regex = /[a-z]+/g;
    console.log(regex.test(string));
}
countEach("xxxoooox");*/
//Exo 02
function countEach(string) {
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < string.length; i++) {
        var letter = string.charAt(i);
        if (letter === "x") {
            countX++
        }
        if (letter === "o") {
            countO++
        }
        console.log(letter);
    }

    console.log(countX)
    console.log(countO)
    if (countX === countO) {
        console.log(true)
    } else {
        console.log(false)
    }
}
countEach("xxxoooox");

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

//04 - Swap

function swap(text) {
    var helloWorld = ''
    var string;
    for (i = 0; i <= text.length - 1; i++) {
        string = text[i];
        if (text[i] == string.toUpperCase()) {
            helloWorld += string.toLowerCase();
        } else {
            helloWorld += string.toUpperCase();
        }
    }
    console.log(helloWorld)
}

swap("Hello World");

//Bonus

function makeItSpongeBob(text) {
    var helloWorld = ''
    var string;
    for (i = 0; i <= text.length - 1; i++) {
        string = text[i];
        if (text[i] == string.toUpperCase()) {
            helloWorld += string.toLowerCase();
        } else {
            helloWorld += string.toUpperCase();
        }
    }
    console.log(helloWorld)
}

makeItSpongeBob("Javascript is easy");

//Bonus II

function caseInsensitiveSort(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

function sortLetters(text) {
    text = text.split("");
    text = text.sort(caseInsensitiveSort);
    text = text.join("");
    console.log(text);
}
sortLetters("koNeXio");