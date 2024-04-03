function sleep(ck, val) {
  setTimeout(function () {
    console.log(val++);
    ck(val);
  }, 1000);
}

sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {
      sleep(function (val) {}, val);
    }, val);
  }, val);
}, 0);
