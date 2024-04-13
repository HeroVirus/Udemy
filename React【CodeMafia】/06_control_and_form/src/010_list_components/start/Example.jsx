const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const newAnimals = animals.map((animal) => <li>Hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        <li>{newAnimals}</li>
      </ul>
    </>
  );
};

export default Example;
