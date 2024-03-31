const a = {
  prop: 0,
};
let { prop } = a;

prop = 1;
console.log(a, prop);

//特定のプロパティを使用する場合は、オブジェクトの箇所にプロパティを記述し直接分割代入をすることができる
function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}
fn(a);

const c = {
  prop1: {
    prop2: 1,
  },
};

let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 2;

console.log(c, prop1);

//分割代入を使って宣言した変数がオブジェクトの場合は、オブジェクトの参照を保持しているため
分割代入もとのオブジェクトにも変更が影響される;
