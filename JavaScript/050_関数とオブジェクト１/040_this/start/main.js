const person = {
  name: "TOM",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();
//thisは呼び出し元のオブジェクトへの参照を保持する
