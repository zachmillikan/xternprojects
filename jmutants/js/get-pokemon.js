// var url = 'http://pokeapi.co/api/v2/pokemon/'
//
// function loadPokemon() {
//   $.ajax({
//     method: 'Get'
//     url: url + Math.floor(Math.random() * 721);
//   })
// }
//
// $.get({
//   url: url,
//   success: loadPokemon
// });

$.get({
  url: 'http://pokeapi.co/api/v2/pokemon/1',
  success: function(pokemon) {
    // $.each(pokemon, function(i, pokemon) {
    //   $('#mutantList').append('<li>' + pokemon.pokemon_name + '</li>');

    // });
    console.log(pokemon);
    console.log(pokemon.id);
    console.log(pokemon.name);
    $('#mutantList').append(pokemon.name);
  }
});

// var pokemon = {
//   pokemon_name: 'Bulbasaur',
//   ability: 'adorable'
// }
