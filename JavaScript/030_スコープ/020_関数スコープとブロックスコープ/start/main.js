//関数宣言
function a() {
  let b = 0;
  console.log(b);
}
a();

//実行コードから値を確認できるか
//if文の時も同様
if (true) {
  //ブロックスコープ
  //必ず、let cosntで宣言する
  let c = 1;
  //varはブロッスコープを無視する
  var d = 4;

  const f = function () {
    console.log("無視されない");
  };
  console.log(c);
  f();
}
console.log(d);

//var宣言、関数宣言ではブロックスコープは無視される
