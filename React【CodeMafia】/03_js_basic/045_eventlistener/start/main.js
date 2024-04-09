const Button = document.querySelector("button");

Button.addEventListener("click", (e) => {
  //主に、イベントを引数に持つ
  console.log(e.target.textContent);
  console.log("hello");
});
