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