var request = require('request');


// 02 - Chuck Norris

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(err, response, body) {
        console.log(err);
        var value = JSON.parse(body).value;
        console.log(value);
    });
}
getFact();