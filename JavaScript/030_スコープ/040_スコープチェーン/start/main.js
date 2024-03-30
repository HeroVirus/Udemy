let a = 2;
window.a = 4;
function fn1() {
  //   let a = 1;
  function fn2() {
    if (true) {
      const a = 3;
      console.log(a);
    }
  }
  fn2();
}
fn1();
