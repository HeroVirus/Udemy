import "./Expression.css";
const Expresstion = () => {
  const title = "Expression";
  const hello = (arg) => `${arg} Function`;
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{hello("hello")}</h3>
    </div>
  );
};
export default Expresstion;
