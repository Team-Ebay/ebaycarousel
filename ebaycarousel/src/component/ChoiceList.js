export const ChoiceList = () => {
  const names = ["Condition:", "Color:", "Quantity:"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
};
