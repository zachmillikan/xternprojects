$(document).foundation();

var app = {

  init: function() {
    var myForm = document.querySelector('form');
    myForm.onsubmit = app.addValuesToDetails;
  },

  buildList: function (firstName) {
    var li = document.createElement('li');
    li.innerHTML = firstName + '<a href="#" onclick="deleteItem(item)">Delete</a>' + '<a href="#">Promote</a>';

    return li;
  },

  deleteItem: function(item){

  },

  addValuesToDetails: function(ev) {
    ev.preventDefault();
    var details = document.querySelector('div.details');
    var firstName = this.firstName.value;

  details.appendChild(app.buildList(firstName));

  }
};

app.init();
