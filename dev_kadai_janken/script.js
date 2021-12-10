
// 最初にじゃんけんの定義
let x_janken = ['Rock', 'Scissor', 'Paper'];
let y_janken = ['Rock', 'Scissor', 'Paper'];

// クリックしたら以下の関数が動き出す
function btnClick(y_value){
  // x, yそれぞれの乱数を定義してやって、
  let x_ran = Math.floor(Math.random()*3);
  

  // 次に、それらの乱数で勝敗を決める
  if (x_ran === y_value){
    result = "Draw" + "<br>" + "Let's try again!!";
  }else if(x_ran === 0 && y_value === 1) {
    result = "Lose" + "<br>" + "Let's try again!!";
  }else if(x_ran === 1 && y_value === 2) {
      result = "Lose" + "<br>" + "Let's try again!!";
  }else if(x_ran === 2 &&  y_value === 0) {
      result = "Lose" + "<br>" + "Let's try again!!";
  }else {
      result = "WIN" + "<br>" + "Congrats!!";
  }
  // そして、最後に配列から結果をとってくる、
  document.getElementById("x_result").innerHTML = "She choose " + x_janken[x_ran];

  document.getElementById("y_result").innerHTML = "You choose " + y_janken[y_value];

  document.getElementById("result").innerHTML = "You " + result;

  // ついでに画像も差し込んでやる
  document.getElementById("x_img").src = "imgs/janken_" + x_janken[x_ran] + ".png";

  document.getElementById("y_img").src = "imgs/janken_" + y_janken[y_value] + ".png";


}
