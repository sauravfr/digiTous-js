/*//04 - Swap

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

swap("Hello World");*/