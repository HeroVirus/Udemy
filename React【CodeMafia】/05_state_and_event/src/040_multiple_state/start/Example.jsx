import { useState } from "react";

const Example = () => {
  const [valA, setValA] = useState(0);
  const clickValA = () => {
    setValA(valA + 1);
  };
  const [valB, setValB] = useState(10);
  const clickValB = () => {
    setValB(valB + 1);
  };
  const [valC, setValC] = useState(100);
  const clickValC = () => {
    setValC(valC + 1);
  };
  return (
    <>
      <p>ボタンAを{valA}回おしまいた</p>
      <button onClick={clickValA}>ボタンA</button>
      <p>ボタンBを{valB}回おしまいた</p>
      <button onClick={clickValB}>ボタンB</button>
      <p>ボタンCを{valC}回おしまいた</p>
      <button onClick={clickValC}>ボタンC</button>
    </>
  );
};

export default Example;
