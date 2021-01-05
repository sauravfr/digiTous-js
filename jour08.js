var request = require('request');
//01 - Countries
var countriesNames = [];

function getCountries() {
    request.get("https://restcountries.eu/rest/v1/all", function(err, response, body) {
        console.log(err);
        coutriesNames = JSON.parse(body)
        for (i = 0; i < coutriesNames.length; i++)
            console.log(coutriesNames[i].name);
    });
}
getCountries();

// 02 - Chuck Norris

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(err, response, body) {
        console.log(err);
        var value = JSON.parse(body).value;
        console.log(value);
    });
}
getFact();

// 03 - Pokemon
function catchPokemon(number) {
    request.get(`https://pokeapi.co/api/v2/pokemon/${number}`, function(err, res, body) {
        var pokemon = JSON.parse(body);
        console.log(`Id: ${pokemon.id}`);
        console.log(`Name: ${pokemon.name}`);
    })
}
catchPokemon(5);