import AnimalItems from "./Animalitems.jsx";
const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>アニマルがありません</h3>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItems key={animal} animal={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
