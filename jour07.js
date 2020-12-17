//01 - Alphabet
function sortLetters(text) {
    text = text.split("");
    text = text.sort();
    text = text.join("");
    console.log(text);
}


sortLetters("konexio");