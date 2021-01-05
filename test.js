var request = require('request');

// 03 - Pokemon
function catchPokemon(number) {
    request.get(`https://pokeapi.co/api/v2/pokemon/${number}`, function(err, res, body) {
        var pokemon = JSON.parse(body);
        console.log(`Id: ${pokemon.id}`);
        console.log(`Name: ${pokemon.name}`);
    })
}
catchPokemon(5);