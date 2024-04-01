window.name = "John";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();

function fn(ref) {
  ref();
}

fn(person.hello);

//オブジェクトのメゾットを引き継いだ段階で関数となっているためグローバルオブジェクトが取れてくる
//オブジェクトのメゾットをコールバック関数として渡した場合には関数として内部で実行される
