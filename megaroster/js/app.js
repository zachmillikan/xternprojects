$(document).foundation();

var megaRoster = {
  init: function(listSelector) {
    this.studentList = document.querySelector(listSelector);
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


    this.prependChild(this.studentList, listItem);

    // Reset empties the input text field so that it is empty
    f.reset();
    this.count += 1;

    f.studentName.focus();
  },

  prependChild: function(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem: function(studentName) {

    var listItem = document.createElement('li');
    listItem.innerText = studentName;
    this.appendLinks(listItem);

    return listItem;
  },

  appendLinks: function(listItem) {
    var i = false;
    var span = document.createElement('span');
    span.className += 'actions';

    var removeLink = this.buildLink({
        text: 'remove',
        handler: function() {
          listItem.remove();
        }
    });

    var promoteLink = this.buildLink({
        text: 'promote',
        handler: function() {
          this.promote(listItem);
          // if (i === false)
          // {
          //   var temp = document.querySelector('ul');
          //   megaRoster.prependChild(temp, listItem);
          //   listItem.style.border = '2px CornflowerBlue dashed';
          //   listItem.style.background = '#e6e6e6';
          //   i = true;
          // }
          // else if (i === true)
          // {
          //   studentList.appendChild(listItem);
          //   listItem.style.border = 'none';
          //   listItem.style.background = 'white';
          //   i = false;
          //   text: 'promote';
          // }
        }.bind(this)
    });
    var moveUpLink = this.buildLink({
        text: 'move up',
        handler: function() {
          this.moveUp(listItem);
          // var temp = document.querySelector('ul');
          // temp.insertBefore(listItem, listItem.previousSibling);
        }.bind(this)
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
    });
    span.appendChild(removeLink);
    span.appendChild(promoteLink);
    span.appendChild(moveDownLink);
    span.appendChild(moveUpLink);
    span.appendChild(moveToTopLink);
    listItem.appendChild(span);
  },

  buildLink: function(options) {
    var link = document.createElement('a');
    link.href="#";
    link.innerText = options.text;
    link.onclick = options.handler;
    return link;
  },

  promote: function(listItem) {
    this.prependChild(this.studentList, listItem);
  },

  moveUp: function(listItem) {
    var previousItem = listItem.previousElementSibling;
    this.studentList.insertBefore(listItem, previousItem);
  },

  moveDown: function(listItem) {

  },

  buildEdit: function(){
    var link = document
  },
};

megaRoster.init('#studentList');
