window.name = "Bob";
const person = {
  name: "TOM",
  hello: function () {
    console.log("Hello " + this.name);
    a();
    const person = {
      name: "TiM",
      hello: function () {
        console.log("Hello " + this.name);
        a();
      },
    };
    person.hello();
  },
};
person.hello();
// const ref = person.hello;
// ref();

//this =>呼び出し元のオブジェクト
//オブジェクトのメソッドとして実行される

//this =>  グローバルオブジェクト
//関数として実行される

function a() {
  console.log("Hello " + this.name);
}
a();
