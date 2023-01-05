import Hero from "@/components/hero/Hero";
import ItemList from "@/components/ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div className="gap-2p-4 container relative mx-auto flex w-full items-center pb-10">
      <div className="container flex flex-col">
        <Hero />
        <ItemList />
      </div>
    </div>
  );
};
export default ItemListContainer;
