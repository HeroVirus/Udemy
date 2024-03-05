function a() {
  let b = 0;
  console.log(b);
}
a();

//実行コードから値を確認できるか

{
  //ブロックスコープ
  //必ず、let cosntで宣言する
  let c = 1;
  var d = 4;
  console.log(c);
}
console.log(d);

//var宣言、関数宣言ではブロックスコープは無視される
