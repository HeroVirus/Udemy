function a() {
  console.log("hello");
}

a.prop = 0;
a.method = function () {
  console.log("method");
};
a();
a.method();
console.log(a.prop);

//ドット技法でプロパティを追加できるので関数もオブジェクトと言える。
