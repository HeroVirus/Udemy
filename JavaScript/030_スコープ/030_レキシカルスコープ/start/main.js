let a = 2;

function fn1() {
  let b = 1;
  function fn2() {
    let c = 3;
    console.log(b);
  }
  fn2();
}
fn1();

// コードを書く場所によって参照できる変数が変わるスコープ
// 静的スコープという
