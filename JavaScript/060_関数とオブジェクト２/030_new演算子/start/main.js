//コンストラクタ関数の戻り値がリターンでオブジェクトになっている場合
function F(a, b, d) {
  this.a = a;
  this.b = b;
  this.d = d;
  return { a: 1 };
}

F.prototype.c = function () {};

function newOp(C, ...args) {
  const _this = Object.create(C.prototype);
  //Object.createは、__proto__に引数で設定されたオブジェクトをコピーしてさらに空のオブジェクト生成するメソッド
  const result = C.apply(_this, args);
  console.log(result);
  // console.log(_this);
  console.log(typeof result);

  if (typeof result === "object" && result !== null) {
    return result;
  }
  return _this;
}

const instance = newOp(F, 1, 2, 3);
console.log(instance);
