import { useState } from "react";

const Example = () => {
  const [conut, setCount] = useState(0);
  const conutUp = () => {
    setCount(conut + 1);
  };
  const conutdown = () => {
    setCount(conut - 1);
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: {conut}</p>
      <button onClick={conutUp}>+</button>
      <button onClick={conutdown}>-</button>
    </>
  );
};

export default Example;
