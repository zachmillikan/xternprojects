$('#add_Student').on('click', newStudent);
var url = 'http://xtern-roster.herokuapp.com/people';
var rivals = 'http://xtern-roster.herokuapp.com/rivalries';
console.log('Hello');

function newStudent (ev) {
  debugger;
  var f = ev.currentTarget;
  ev.preventDefault();
  var student = {
    name: f.studentname.value,
  };
  createStudent(student);
}

function createStudent(student) {
  $.post ({
    url: url,
    data: {
      name: name
    },
    success: function(student){
     addStudent(student);
    },
  });
}

function loadStudents(students) {
  $.each(students, function(i, student) {
    addStudent(student);
  });
}

function addStudent(student) {
  // var li = $('.names')
  //   .clone()
  //   .removeClass('names');
  //
  //   console.log(li);
    // li.find('.student-name').text(student.name)
    // li.attr('data-id', student.id);
    $('#students').append('<li>' + student.name + '</li>');
}



$.get({
  url: url,
  success: loadStudents
});
