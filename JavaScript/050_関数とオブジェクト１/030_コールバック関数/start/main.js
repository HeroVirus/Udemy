function hello(name) {
  console.log("hello " + name);
}

function bye() {
  console.log("bye");
}
//渡されす関数をコールバック関数といい、渡された関数の内部で実行される
function fn(cb) {
  cb("TOM");
}

fn(hello);
fn(bye);

//setTimeoutの第一引数には、callback関数が渡されるがckの引数は受け取れない
setTimeout(hello, 2000);
