class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("hello " + this.name);
  }
}

const bob = new Person("bob", 23);
console.log(bob);
//class を使用しても生成されるインスタンスはオブジェクトである。
