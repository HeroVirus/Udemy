const Example = () => {
  const cliclHandler = () => {
    alert("ボタンがクリックされました");
  };
  const cliclHandler2 = () => {
    console.log("ボタンがクリックされました");
  };

  return (
    <>
      <button onClick={cliclHandler}>クリックしてね</button>
      <button onClick={cliclHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
