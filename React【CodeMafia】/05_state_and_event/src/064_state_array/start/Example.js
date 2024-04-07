import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(numArray);
  const changeNumber = () => {
    const newNum = [...num];
    const value = newNum.pop();
    newNum.unshift(value);
    setNum(newNum);
  };
  return (
    <>
      <h1>{num}</h1>
      <button onClick={changeNumber}>shuffle</button>
    </>
  );
};

export default Example;
