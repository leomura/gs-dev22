
// const taskbox = [];

// ①タスク追加


// ③読み込み時表示状態の保持
for(let i=0; i<localStorage.length; i++){
  const x = localStorage.length.toString();
  const y = $("#task").val();
  $("#task-list").prepend('<li data-todo='+i+'"><input type = "checkbox" class="done-btn"id = "ch"><label for = "ch" >' + localStorage.getItem(localStorage.key(i)) + '</label></li>');
};


// 追加
$("#add").on("click", function(){
  
  // 配列を振り直すためにまず一回中身を全部消す
  $("#task-list").empty();

  // 次に取得をしてくる
  const x = localStorage.length.toString();
  const y = $("#task").val();
  
  // // 次に、取得した値を配列に入れてやる
  localStorage.setItem(x, y);
  
  // 入れた配列を元に表示をする
  for(let i = 0; i < localStorage.length; i++){
    $("#task-list").prepend('<li data-todo='+i+'"><input type = "checkbox" class="done-btn"id = "ch"><label for = "ch" >' + localStorage.getItem(localStorage.key(i)) + '</label></li>');
  };

  $("#task").val('');
 });


//  一括削除ボタン
 $("#delete").on("click",function(){
    localStorage.clear();    
    $("#task-list").empty();
  });


// ④完了ボタン
$(".done-btn").on('click', function(){

  console.log("AuthenticatorAssertionResponse");
  
  $(this).parent('li').addClass('done');

}); 

// ⑤キャンセルボタン
$('.cancel-btn').on( 'click', function() {
  $(this).parent('li').fadeOut();
});  


$('#task-list').sortable();






//   localStorage.removeItem($(this).data('todo'));
//   $(this).remove();
// };

// $('.done-btn').on( 'click', function() {

//   $('#task-list').empty();

//   $(this).parent('li').addClass('done');
//   localStorage.removeItem($(this).data('todo'));

// }); 

// // 完了ボタン
// function Done()

// function deletelist(){
//   let t = $(this).closest('li');
//   t.remove();
// }


// $('ul').on('click', '.todo', function(){
//   localStorage.removeItem($(this).data('todo'));
//   $(this).remove();

// });




// //1.Save クリックイベント
// $("#save").on("click",function(){
//   const key = $("#key").val();
//   const value = $("#memo").val();
//   localStorage.setItem(key,value);
//   const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
//   $("#list").append(html);
// });

// //2.clear クリックイベント
// $("#clear").on("click",function(){
//   localStorage.clear();
//   $("#list").empty();
// });

// //3.ページ読み込み：保存データ取得表示
// for(let i=0; i<localStorage.length; i++){
//   const key   = localStorage.key(i);
//   const value = localStorage.getItem(key);
//   const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
//   $("#list").append(html);
// }




