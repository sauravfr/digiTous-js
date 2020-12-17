//02 - XOXO
function countEach(string) {
    var numbers = string.match(/\X+/);
    if (numbers === string) {
        console.log(true);
    } else {
        console.log(false);
    }
}
countEach("xxxoooox");