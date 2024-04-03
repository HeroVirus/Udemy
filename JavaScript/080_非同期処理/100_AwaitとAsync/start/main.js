function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  //async Promiseのインスタンスを返すことができる
  let val = await sleep(0);
  //await をつけることにより、resolveの引数を変数に格納することができる
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error();
  console.log(val);
  return val;
}
init()
  .then(function (val) {
    console.log(val);
  })
  .catch(function (e) {
    console.error(e);
  });

// sleep(0)
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });
