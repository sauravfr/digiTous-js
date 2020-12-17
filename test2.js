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