const ItemQuantity = ({ count }) => {
  return (
    <div className="col-span-3 flex items-baseline justify-between rounded-md bg-slate-200 py-3 px-5 md:col-span-1 ">
      <p className="text-3xl text-slate-200">-</p>
      <span className="text-xl">{count}</span>
      <p className="text-3xl text-slate-200">+</p>
    </div>
  );
};
export default ItemQuantity;
