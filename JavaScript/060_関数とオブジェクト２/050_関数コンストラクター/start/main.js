const fn = new Function("a", "b", "return a + b");
const result = fn(1, 2);
console.log(result);

function fn2(a, b) {
  return a + b;
}
