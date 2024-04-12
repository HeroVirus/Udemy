import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  //配列で渡ってくるので分割代入で受け取る
  //配列の0番目は参照用の値
  //配列の1番目は更新用の関数
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />{" "}
      = {val}
    </>
  );
};

export default Example;
