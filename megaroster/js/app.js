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


    this.prependChild(studentList, listItem);

    // Reset empties the input text field so that it is empty
    f.reset();
    this.count += 1;

    f.studentName.focus();
  },

  prependChild: function(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem: function(studentName) {
    var i = false;
    var listItem = document.createElement('li');
    var removeLink = this.buildLink({
        text: 'remove',
        handler: function() {
          listItem.remove();
        }
    });

    var promoteLink = this.buildLink({
        text: 'promote',
        handler: function() {
          if (i === false)
          {
            var temp = document.querySelector('ul');
            megaRoster.prependChild(temp, listItem);
            listItem.style.border = '2px CornflowerBlue dashed';
            listItem.style.background = '#e6e6e6';
            i = true;
          }
          else if (i === true)
          {
            studentList.appendChild(listItem);
            listItem.style.border = 'none';
            listItem.style.background = 'white';
            i = false;
            text: 'promote';
          }
        }
    });
    var moveUpLink = this.buildLink({
        text: 'move up',
        handler: function() {
          var temp = document.querySelector('ul');
          temp.insertBefore(listItem, listItem.previousSibling);
        }
    });
    var moveDownLink = this.buildLink({
        text: 'move down',
        handler: function moveItemDown() {
          var temp = document.querySelector('ul');
          temp.insertBefore(listItem.nextSibling, listItem);
        }
    });
    var moveToTopLink = this.buildLink({
        text:'move to top',
        handler: function() {
          var temp = document.querySelector('ul');
          megaRoster.prependChild(temp, listItem);
        }
    })
    listItem.innerText = studentName;

    listItem.appendChild(moveToTopLink);
    listItem.appendChild(moveUpLink);
    listItem.appendChild(moveDownLink);
    listItem.appendChild(promoteLink);
    listItem.appendChild(removeLink);
    return listItem;
  },

  buildLink: function(options) {
    var link = document.createElement('a');
    link.href="#";
    link.innerText = options.text;
    link.onclick = options.handler;
    return link;
  },

  buildEdit: function(){
    var link = document
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
