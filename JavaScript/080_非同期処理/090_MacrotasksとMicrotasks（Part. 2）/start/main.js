new Promise(function promise(resolve) {
  console.log("promise");

  setTimeout(function task1() {
    console.log("task1");
    resolve();
  });
})
  .then(function job1() {
    console.log("job1");
    setTimeout(function task1() {
      console.log("task2");
    });
  })
  .then(function job2() {
    console.log("job2");
  })
  .then(function job3() {
    console.log("job3");
  });

console.log("global end");
