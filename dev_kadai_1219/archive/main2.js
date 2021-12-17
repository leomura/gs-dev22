function appendTodo (val){
  $('#task-list').append("<li>" + val + "  <a href='#' class='done-btn'>Done</a> <a href='#' class='cancel-btn'>Cancel Task</a></li>");
}

if (localStorage['tasks']){
  var tasks = JSON.parse(localStorage['tasks']);
}else{
  var tasks = [];
}

for(var i=0;i<tasks.length;i++) {
  appendTodo(tasks[i]);
}

var add = function(){
  var val = $('#task').val();

  tasks.push(val);

  localStorage['tasks'] = JSON.stringify(tasks);

  appendTodo(val);

  $('#task').val("").focus();
}

$('#add').click(add);
$('task').keyup(function(e){
  if(e.keyCode === 13){
    addTask();
  }

});


$('.done-btn').on( 'click', function() {
  $(this).parent('li').addClass('done');
});    
    
$('.cancel-btn').on( 'click', function() {
  $(this).parent('li').fadeOut();
});    


$("#delete").on("click",function(){
  localStorage.clear();
  $("#task-list").empty();
});