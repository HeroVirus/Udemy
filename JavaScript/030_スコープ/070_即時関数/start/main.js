// 一度だけ実行されて
// 実行結果が呼び出し元に返却される
// let result = (
//   function (仮引数) {
//     return　戻り値
//   }
// )(実引数)

function a() {
  console.log("called");
}

a();

let b = (function () {
  console.log("called");
})();

let c = (function () {
  console.log("called");

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log("privateFn is called");
  }
  privateFn();

  function publicFn() {
    console.log("publicFn is called: " + privateVal++);
  }

  return {
    publicVal,
    publicFn,
  };
})();

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();

console.log(c.publicVal);
