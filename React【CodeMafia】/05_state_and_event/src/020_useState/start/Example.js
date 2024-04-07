import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;

//useStateには、[0]には更新する値と[1]には更新する関数が渡ってくる
//配列の0番目に参照用の値、一番目に更新用の関数が渡ってくる
//一般的に、useStateは分割配列で受け取る[val, setVal]等で
