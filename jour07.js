//01 - Alphabet
function sortLetters(text) {
    text = text.split("");
    text = text.sort();
    text = text.join("");
    console.log(text);
}
sortLetters("konexio");

//02 - XOXO
function countEach(string) {
    var regex = /[a-z]+/g;
    console.log(regex.test(string));
}
countEach("xxxoooox");

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