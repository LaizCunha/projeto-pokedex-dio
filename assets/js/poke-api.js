
const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

function somar(a, b) {
    return undefined;
}

pokeApi._getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)

        .then(x => {
            return x;
        })

        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests)) // na vdd pokemons ainda sao promesas
        .then((pokemonsDetails) => pokemonsDetails)
}

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const response = await fetch(url);
    const jsonBody = await response.json();
    const pokemonPromises = await jsonBody.results.map(pokeApi.getPokemonDetail); // aqui ele constroi varias requisicoes, uma para cada pokemon
    const pokemonsDetails = await Promise.all(pokemonPromises);
    return pokemonsDetails;
}

var a = {};

