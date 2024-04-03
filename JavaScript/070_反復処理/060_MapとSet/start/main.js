const map = new Map();
const key1 = {};

map.set(key1, "value1");
console.log(map.get(key1));

const key2 = function () {};
map.set(key2, "value2");
console.log(map.get(key2));

for (const [k, v] of map) {
  console.log(k, v);
}

const s = new Set();
const key3 = 0;
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

for (let m of s) {
  console.log(m);
}

// const arry = Array.from(s);
const arry = [...s];
console.log(arry[1]);
