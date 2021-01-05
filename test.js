// 02 - Chuck Norris
function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(err, res, body) {
        var joke = JSON.parse(body);
        var value = joke.value;
        console.log(value);
    })
}
getFact()