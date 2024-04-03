new Promise(function (resolve, reject) {
  console.log("promise");
  setTimeout(function () {
    resolve("hello");
  }, 3000);
})
  .then(function (data) {
    console.log("then: " + data);
    // throw new Error();
    return data;
  })
  .then(function (data) {
    console.log("then: " + data);
    return data;
  })
  .then(function (data) {
    console.log("then: " + data);
    return data;
  })
  .catch(function (data) {
    console.log("catch: " + data);
  })
  .finally(function () {
    console.log("finally");
  });
console.log("global end");
