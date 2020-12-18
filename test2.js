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