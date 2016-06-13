//get-mutants.js
$.get({
  url: 'https://mutant-school.herokuapp.com/api/v1/mutants',
  success: function(mutants) {
    $.each(mutants, function(i, mutant) {
      $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
  });
 }
});

//createMutant.js
var mutant = {
  mutant_name: 'Michaelll',
  real_name: 'Miiiiiiiichaaaeeeel',
  power: 'Yeah.'
}


function createMutant(mutant) {
  $.post({
    url: url,
    data: {
      mutant: mutant
    },
    success: function(x) {
      alert(x);
    },
  });
}
