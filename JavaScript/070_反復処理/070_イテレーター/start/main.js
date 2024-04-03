function genIterator(max = 10) {
  let i = 0;
  return {
    next() {
      if (i >= max) {
        return {
          done: true,
        };
      } else {
        return {
          done: false,
          value: i++,
        };
      }
    },
  };
}

const it = genIterator(100);
let a = it.next();
while (!a.done) {
  console.log(a.value);
  a = it.next();
}
