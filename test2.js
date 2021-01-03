//Exo 02
function countEach(string) {

    var countX = 0;
    var countO = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            console.log("error");
        } else {
            var letter = string.charAt(i);
            if (letter === "x") {
                countX++
            }
            if (letter === "o") {
                countO++
            }
        }
    }


}
countEach("xooox");