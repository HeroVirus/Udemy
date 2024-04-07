import { useState } from "react";

// オブジェクト型のステートを渡す時は、変更していない要素も渡す必要がある。
// また、変更関数にわたすものもオブジェクト型でなくてはならずしかも
// useStateのオブジェクトとは違うものではならない。
// 渡す際に、同じように記載してもいいがスプレット構文を使うことで記述を簡略化できる。
// また、スプレット構文の後ろに変更したい要素を記述することで
// 異なるオブジェクトを作成し、変更した要素を変更することができる。

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    // setPerson({ name: e.target.value, age: person.age });
    //スプレット構文を使用した記述
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    //スプレット構文を使用した記述
    setPerson({ ...person, age: e.target.value });
  };
  const reset = () => {
    setPerson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
