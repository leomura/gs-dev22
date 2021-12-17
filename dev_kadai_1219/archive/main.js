
$(function(){
  let taskbox = [];
  let i = 0;


  // 初期読み込み時：アルファベット順の並び替え
  for(let key in localStorage){
    taskbox[key] = localStorage.getItem(key);

    // console.log(taskbox);
  }

  for(i in taskbox){
    console.log(i);
    createLi(taskbox[i]);
  }

  i++;

  $('#add').click(function(){

    let task = $('#task').val();

    if(!task) return;

    localStorage.setItem(i, task);

    createLi(task);

    $('task').val('');

    i++;

  });


  function createLi(value){
    let li = $('<li>').html(value).addClass('todo').attr('data-todo',i);

    $('ul').append(li);

    $('ul').on('click', '.todo', function(){
      localStorage.removeItem($(this).data('todo'));
      $(this).remove();

    });

  $('delete').click(function(){
    localStorage.clear();
    $('li').remove();
  
  });

}

});





