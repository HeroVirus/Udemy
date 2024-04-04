const targetObj = { a: 0 };
const header = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;
  },
};

const pxy = new Proxy(targetObj, header);
pxy.a = 1;
