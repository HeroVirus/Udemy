function a(b) {
  setTimeout(function task1() {
    console.log("task1 done");
    b();
  }, 2000);

  console.log("fn a done");
}

function b() {
  console.log("fn b done");
}

a(b);

// b();
