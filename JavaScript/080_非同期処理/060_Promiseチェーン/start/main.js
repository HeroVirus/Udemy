function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(1).then(function (val) {
  return sleep(val);
});
//非同期で処理を繋げる為には、前のメゾットの中のコールバック関数のリターンにPromiseのインスタンスをセットする。
