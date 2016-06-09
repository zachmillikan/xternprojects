// $.get({
// //   url: 'http://pokeapi.co/api/v2/pokemon/1',
// //   success: function(pokemon) {
// //     console.log(pokemon);
// //     console.log(pokemon.name);
// //     console.log(pokemon.id);
// //     console.log(pokemon.abilities);
// //     $('#pokemon_list').append(pokemon.name);
// //   }
// // });
//
// function printPokemon(pokemons) {
//   $.each(pokemons.results, function(i, pokemon) {
//     $('#pokemon_list').append('<li>' + pokemon.name);
//     // $('#pokemon_list').append(' ' + pokemon.id + '</li>');
//     console.log(pokemon.name);
//     // console.log(pokemon.id.value);
//   })
// }
// $.get({
// url: 'https://pokeapi.co/api/v2/pokemon/?limit=10',
// success: printPokemon
// });
function selectGen(generation) {
  
}

$('#pokemon-generator').on('click', createGenOnePokemon);
$('#pokemon-generator2').on('click', createGenTwoPokemon);
$('#pokemon-generator3').on('click', createGenThreePokemon);
$('#pokemon-generator4').on('click', createGenFourPokemon);
$('#pokemon-generator5').on('click', createGenFivePokemon);
$('#pokemon-generator6').on('click', createGenSixPokemon);
$('#pokemon-generator7').on('click', createRandomPokemon);

var url = 'https://pokeapi.co/api/v2/pokemon/?limit=1&offset=';
var template = $('.template')
  .clone()
  .removeClass('template')
  .detach();

function loadPokemon(pokemon) {
  $.each(pokemon.results, function(i, pokemon) {
    addMutant(pokemon);
  });
}

function addMutant(pokemon) {
  var li = template.clone();
  li.find('.mutant-name a')
    .text(pokemon.name)
    .attr('href', pokemon.url)

  li.attr('data-id', pokemon.id);
  $('#mutantList').append(li);
}

function createGenOnePokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 151)),
    success: loadPokemon
  });
}

function createGenTwoPokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 100) + 151),
    success: loadPokemon
  });
}

function createGenThreePokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 135) + 251),
    success: loadPokemon
  });
}

function createGenFourPokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 107) + 386),
    success: loadPokemon
  });
}

function createGenFivePokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 156) + 493),
    success: loadPokemon
  });
}

function createGenSixPokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 72) + 649),
    success: loadPokemon
  });
}

function createRandomPokemon() {
  $.get({
    url: url + Math.floor((Math.random() * 721)),
    success: loadPokemon
  });
}
