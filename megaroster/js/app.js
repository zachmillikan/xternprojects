$(document).foundation();

var megaRoster = {
  init: function() {
    this.setupEventListeners();
    this.count = 0;
  },

  setupEventListeners: function() {
    document.querySelector('form#studentForm').onsubmit =
    this.addStudent.bind(this);
  },

  addStudent: function(ev) {
    ev.preventDefault();
    var f = ev.currentTarget;
    var studentName = f.studentName.value;
    var listItem = this.buildListItem(studentName);
    var studentList = document.querySelector('#studentList');
    studentList.appendChild(listItem);
    f.reset();
    this.count += 1;

    f.studentName.focus();
  },

  buildListItem: function(studentName) {
    var listItem = document.createElement('li');
    var removeLink = this.buildLink('remove');
    var promoteLink = this.buildLink('promote');
    listItem.innerText = studentName;
    listItem.appendChild(removeLink);
    listItem.appendChild(promoteLink);

    return listItem;
  },

  buildLink: function(linkText) {
    var link = document.createElement('a');
    link.href="#";
    link.innerText = linkText;
    return link;
  },
};

megaRoster.init();


// var app = {
//
//   init: function() {
//     var myForm = document.querySelector('form');
//     myForm.onsubmit = app.addValuesToDetails;
//   },
//
//   buildList: function (firstName) {
//     var li = document.createElement('li');
//     li.innerHTML = firstName + '<a href="#" onclick="deleteItem(item)">Delete</a>' + '<a href="#">Promote</a>';
//
//     return li;
//   },
//
//   addValuesToDetails: function(ev) {
//     ev.preventDefault();
//     var details = document.querySelector('div.details');
//     var firstName = this.firstName.value;
//
//   details.appendChild(app.buildList(firstName));
//
//   }
// };
//
// app.init();
