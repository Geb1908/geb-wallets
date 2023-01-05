const ItemCount = ({ count, setCount, stock }) => {
  const decrementCount = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <div className="col-span-3 flex items-baseline justify-between rounded-md bg-slate-200 py-3 px-5 md:col-span-1 ">
      <button className="text-3xl text-orange-primary" onClick={decrementCount}>
        -
      </button>
      <span className="text-xl">{count}</span>
      <button
        className="text-3xl text-orange-primary"
        onClick={() => {
          if (count < stock) {
            setCount(count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};
export default ItemCount;
