function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function () {
  console.log("Object: hello " + this.name);
};

const bob = new Person("Bob", 18);

console.log("name" in bob);

// hasOwnProperty は自分自身のプロパティーに存在しているか。
// in はプロトタイプチェーンまで遡って存在しているか探す。
