function fn(number) {
  return number * 2;
}

console.log(fn(1));
const f2 = (number) => {
  console.log(number);
  return number * 2;
};
console.log(f2(1));

//オブジェクトの場合{}が重複してしまうので()で事前に囲む
const fnArrowObj = (number) => ({
  result: number * 2,
});
console.log(fnArrowObj(2));
