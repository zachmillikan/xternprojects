function updateMutant(ev) {
  ev.preventDefault();
  var f = ev.currentTarget;
  var mutantName = f.mutantName.value;
  var id = f.mutant.value;
  $.ajax({
    method: 'Put',
    url: url + '/' + id,
    data: {
      mutant: {
        mutant_name: mutantName,
        real_name: 'Swagtastic' + mutantName,
        power: 'Sun'
      }
    },
    success: function (mutant) {
      var li = $('li[data-id=' + id + ']');
      var span = li.find('.mutant_name');
      span.text(mutant.mutant_name);
    }
  });
}
