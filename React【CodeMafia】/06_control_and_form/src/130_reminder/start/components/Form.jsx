import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setenteredTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    createTodo(newTodo);
    setenteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => {
            setenteredTodo(e.target.value);
          }}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
