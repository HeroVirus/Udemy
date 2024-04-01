window.name = "John";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();

const helloTom = person.hello.bind(person);
//bindで指定した第一引数で渡したオブジェクトをこの変数の参照先として束縛してくれる

function fn(ref) {
  ref();
}

fn(person.hello);
fn(helloTom);

function a(name) {
  console.log("hello " + name);
}

const b = a.bind(null, "Tim");
//参照先や、コールバックの引数を束縛することができる。
b();
