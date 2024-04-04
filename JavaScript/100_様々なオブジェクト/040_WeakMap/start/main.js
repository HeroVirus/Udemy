const wm = new WeakMap();

const o = {};
wm.set(o, "value1");
console.log(wm.get(o));
