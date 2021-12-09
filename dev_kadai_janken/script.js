
// 最初にじゃんけんの定義
let x_janken = ['gu', 'choki', 'pa'];
let y_janken = ['gu', 'choki', 'pa'];

// クリックしたら以下の関数が動き出す
function btnClick(y_value){
  // x, yそれぞれの乱数を定義してやって、
  let x_ran = Math.floor(Math.random()*3);
  

  // 次に、それらの乱数で勝敗を決める
  if (x_ran === y_value){
    result = "あいこ";
  }else if(x_ran === 0 && y_value === 1) {
    result = "負け";
  }else if(x_ran === 1 && y_value === 2) {
      result = "負け";
  }else if(x_ran === 2 &&  y_value === 0) {
      result = "負け";
  }else {
      result = "勝ち";
  }
  // そして、最後に配列から結果をとってくる、
  document.getElementById("x_result").innerHTML = "相手は" + x_janken[x_ran] + "を出した";

  document.getElementById("y_result").innerHTML = "あなたは" + y_janken[y_value] + "を出した";

  document.getElementById("result").innerHTML = "なので結果は、あなたの" + result;

  // ついでに画像も差し込んでやる
  document.getElementById("x_img").src = "janken_" + x_janken[x_ran] + ".png";

  document.getElementById("y_img").src = "janken_" + y_janken[y_value] + ".png";


}
