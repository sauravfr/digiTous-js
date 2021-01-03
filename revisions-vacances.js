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

//04 - Répertoire musical
var song1 = {
    title: "Non, je ne regrette rien",
    artist: " Édith Piaf",
    year: 1960
};
var song2 = {
    title: "Je vole",
    artist: "Michel Sardou",
    year: 1978
};
var song3 = {
    title: "Casser la voix",
    artist: " Patrick Bruel",
    year: 1989
};

var music = [];
music.push(song1, song2, song3);
console.log(music);
console.log(`title:${song1.title}, artist:${song3.artist}, year:${song2.year}`);

//05 - Habiller des personnages
var clothes = ["chemise", "pantalon", "veste", "chaussures"];
var colors = ["bleu", "rouge", "vert", "jaune"];

var shelves = [];

function displayOnShelves(clothes, colors) {
    for (var i = 0; i < clothes.length; i++) {
        for (var j = 0; j < colors.length; j++) {
            shelves.push(clothes[i] + " " + colors[j]);
        }
    }
    console.log(shelves);
}
displayOnShelves(clothes, colors);