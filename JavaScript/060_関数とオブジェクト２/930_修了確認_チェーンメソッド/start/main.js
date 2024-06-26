/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
  constructor() {
    this.num = null;
  }
  set(num) {
    console.log(this);
    if (this.num === null) {
      this.num = num;
    } else {
      this._operator(this.num, num);
    }
    return this;
  }
  minus() {
    console.log(this);
    this._operator = function (val1, val2) {
      const result = val1 - val2;
      this._equal(result);
    };
    return this;
  }

  _equal(result) {
    this.num = result;
    console.log(result);
  }
}

const calc = new Calculator();
calc.set(10).minus().set(3).mutiply().set(6).divide().set(2).plus().set(2);
