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
    // Reset empties the input content field so that it is empty
    f.reset();
    debugger;
    megaRoster.count++;
    localStorage.setItem(megaRoster.count, studentName);
    console.log(localStorage);
    f.studentName.focus();
    // this.roster.push({
    //   studentName: "Jordan"
    //   id: 4
    // })
  },

  prependChild: function(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem: function(studentName) {
    var storedList = {};
    var listItem = document.createElement('li');
    var span = document.createElement('span');
    span.innerText = studentName;
    span.className = 'studentName';
    listItem.appendChild(span);
    this.appendLinks(listItem);
    return listItem;
  },

  appendLinks: function(listItem) {
    var span = document.createElement('span');
    span.className += 'actions';

    var removeLink = this.buildLink({
        content: '<i class="fa fa-times"></i>',
        // className: 'alert button',
        handler: function() {
          listItem.remove();
        }
    });

    var promoteLink = this.buildLink({
        content: '<i class="fa fa-thumbs-up"></i>',
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
          //   content: 'promote';
          // }
        }.bind(this)
    });
    var moveUpLink = this.buildLink({
        content: '<i class="fa fa-arrow-circle-up"></i>',
        className: 'moveUp',
        handler: function() {
          this.moveUp(listItem);
          // var temp = document.querySelector('ul');
          // temp.insertBefore(listItem, listItem.previousSibling);
        }.bind(this)
    });
    var moveDownLink = this.buildLink({
        content: '<i class="fa fa-arrow-circle-down"></i>',
        className: 'moveDown',
        handler: function moveItemDown() {
          this.moveDown(listItem);
          // var temp = document.querySelector('ul');
          // temp.insertBefore(listItem.nextSibling, listItem);
        }.bind(this)
    });

    span.appendChild(this.buildLink({
      content: '<i class="fa fa-pencil"></i>',
      className: 'edit',
      handler: function() {
        this.toggleEditable(listItem.querySelector('span.studentName'));
      }.bind(this)
    }));
    span.appendChild(removeLink);
    span.appendChild(promoteLink);
    span.appendChild(moveDownLink);
    span.appendChild(moveUpLink);
    listItem.appendChild(span);
  },

  buildLink: function(options) {
    var link = document.createElement('a');
    link.href="#";
    link.innerHTML = options.content;
    link.onclick = options.handler;
    link.className += (options.className || '');
    return link;
  },

  toggleEditable: function(el) {
    var  toggleElement = el.parentElement.querySelector('a.edit');
    if (el.contentEditable === 'true') {
      el.contentEditable = 'false';
      toggleElement.innerHTML = '<i class="fa fa-pencil"></i>'
    }
    else {
    el.contentEditable = 'true';
    el.focus();
    toggleElement.innerHTML = '<i class="fa fa-check-circle"></i>'
    }
  },

  promote: function(listItem) {
    var i = false;
    if (i === false){
      this.prependChild(this.studentList, listItem);
      toggleElement.innerHTML = '<i class="fa fa-thumbs-down"></i>'
      i = true;
    }

  },

  moveUp: function(listItem) {
    if (listItem !== this.studentList.firstElementChild) {
    var previousItem = listItem.previousElementSibling;
    this.studentList.insertBefore(listItem, previousItem);
    }
  },

  moveDown: function(listItem) {
    if (listItem !== this.studentList.lastElementChild){
    this.moveUp(listItem.nextElementSibling);
    }
  },

  buildEdit: function(){
    var link = document
  },


  }
};

megaRoster.init('#studentList');
