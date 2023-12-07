let number;
const pokeApiInfo = {};

// const pokemonIdCard = document.getElementById("card");

function convertToPokemonCard(info) {
    const pokemonInfo = new Pokemon()

    pokemonInfo.number = info.order
    pokemonInfo.name = info.name
    const types = info.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemonInfo.types = types
    pokemonInfo.type = type

    pokemonInfo.photo = info.sprites.other.dream_world.front_default

    return pokemonInfo
}

pokeApiInfo.getPokemonId = (number) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    return fetch(url)
        .then((response) => response.json())
        .then(convertToPokemonCard)

}

console.log(pokeApiInfo.getPokemonId(2))