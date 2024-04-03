//オペランドは結果を返す

// let a = (1 + 2) * 3;
let a = 0;
console.log(a);

let b;
a = b = 1;
// let b = ++a;
console.log(a, b);

a = (c = a) + 1;
// let c = a++;
console.log(a, c);
function fn() {
  let a = 0;
  return a++;
}
console.log(!fn() * 5);
