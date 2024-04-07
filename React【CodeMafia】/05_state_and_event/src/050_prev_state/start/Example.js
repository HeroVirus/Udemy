import { useState } from "react";
const Example = () => {
  const [num, setNum] = useState(0);
  const countUp = () => {
    // setNum(num + 1);
    setNum(num + 1);
    setNum((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };
  return (
    <>
      <p>現在のカウント数は：{num}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
//【num】の値は、更新関数によって即時に変更されるわけてはない、
//再度、レンダリングするまでその初期値の値を保持する。
//即時に変更はされないが、一つ前の更新結果の値を使って変更関数の引数に渡したい時は
//【prevstate】を使用する、実際は関数で記述するがアロー関数のため省略されて上記のような記載になる。
