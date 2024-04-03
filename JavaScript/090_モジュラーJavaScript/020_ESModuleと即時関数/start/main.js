const moduleA = (function () {
  console.log("IIFE called");

  let privateVal = 1;
  let publicVal = 1;

  function publicFn() {
    console.log("publicFn called: " + publicVal++);
  }

  function privateFn() {}

  return {
    publicFn,
    publicVal,
  };
})();
const moduleB = (function ({ publicFn: fn, publicVal }) {
  fn();
  fn();
  fn();
})(moduleA);
