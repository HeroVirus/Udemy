function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

//2回宣言されるがレキシカルスコープによって異なる引数を取ることができるので
//異なる変数を定義することができる。
const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);
