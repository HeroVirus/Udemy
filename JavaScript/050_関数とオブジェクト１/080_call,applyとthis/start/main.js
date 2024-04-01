function a() {
  console.log("hello " + this.name);
}

const tim = {
  name: "Tim",
};

const b = a.bind(tim);

b();

a.apply(tim);
//apply は第一引数に参照先のオブジェクトで第二引数には、配列を取る

a.call(tim);
//call は第一引数に参照先のオブジェクトで第二引数には、関数の仮引数を取る
