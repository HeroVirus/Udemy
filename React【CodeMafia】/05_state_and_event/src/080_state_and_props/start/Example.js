import { useState } from "react";

// stateをpropsで渡すケースは、
// コンポーネントが消滅する可能性がある時、
// 親のコンポーネントでpropsを定義する。
// 特定のstateを複数のコンポーネントに共有したい時

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? (
        <Count key="A" title="A" count={countA} setCount={setCountA} />
      ) : (
        <Count key="B" title="B" count={countB} setCount={setCountB} />
      )}
    </>
  );
};
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
