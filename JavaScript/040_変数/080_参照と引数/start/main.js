let a = 0;

function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}
fn1(a);

let b = {
  prop: 0,
};

function fn2(arg2) {
  arg2.prop = 1;
  console.log(b, arg2);
}

fn2(b);

function fn3(arg3) {
  arg3 = {};
  console.log(b, arg3);
}

fn3(b);

// プリミティブ型の値を渡す場合には値がコピーされますがオブジェクトの場合は参照が渡っていきますので渡した先に関数内でオブジェクトのプロパティを変更した場合には元のオブジェクトにも影響が出る;
