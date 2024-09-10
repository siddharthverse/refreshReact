type FruitsProps = {
  quantityCount: number;
  decrement: () => void;
  increment: () => void;
};

const Fruits = ({ quantityCount, decrement, increment }: FruitsProps) => {
  const fruits = [
    { id: 1, name: 'apple', price: 0.5 },
    { id: 2, name: 'banana', price: 0.3 },
    { id: 3, name: 'orange', price: 0.4 },
    { id: 4, name: 'grape', price: 0.6 },
    { id: 5, name: 'kiwi', price: 0.8 },
  ];

  return (
    <>
      <h2> Current count is {quantityCount}</h2>
      <button onClick={decrement}>- 1</button>
      <button onClick={increment}>+ 1</button>
      <span>
        {fruits.map((fruit) => (
          <div key={fruit.id}>
            <span>{fruit.name}</span>
          </div>
        ))}
      </span>
    </>
  );
};

export default Fruits;
