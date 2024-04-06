/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }

  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }

  push(val) {
    super.push(val);
    return this;
  }
  forEach(ck) {
    for (let i = 0; i < this.length; i++) {
      ck(this[i], i, this);
    }
  }
  map(ck) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const result = ck(this[i], i, this);
      newInstance.push(result);
    }
    return newInstance;
  }
  filter(ck) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (ck(this[i], i, this)) {
        newInstance.push(this[i]);
      }
    }
    return newInstance;
  }
  reduce(ck, accu) {
    const tmpArry = [...this];
    if (accu === undefined) {
      accu = tmpArry.shift();
    }
    for (let i = 0; i < tmpArry.length; i++) {
      accu = ck(accu, tmpArry[i]);
    }
    return accu;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
  .map(double)
  .push(5)
  .filter(function (v, i) {
    return v > 2;
  })
  .print("place1")
  .reduce(function (accu, curr) {
    return accu + curr;
  });

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
