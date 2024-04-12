import { useState } from "react";

const Example = () => {
  // let d isplayVal;
  let [val, setVal] = useState();
  console.log("再レンダリングされました");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
