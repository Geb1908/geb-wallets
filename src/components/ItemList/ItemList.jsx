import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Items from "@/components/ItemList/Items";
import { useParams } from "react-router";
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "billeteras");
    if (idCategory) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", idCategory)
      );
      getDocs(queryFilter).then((res) => {
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
      });
    } else {
      const queryFilter = query(
        queryCollection,
        where("highlight", "==", true)
      );
      getDocs(queryFilter).then((res) => {
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
      });
    }
  }, [idCategory]);

  return (
    <>
      {items.length ? (
        <Items items={items} idCategory={idCategory} />
      ) : (
        <div className="mx-auto flex h-[70vh] w-screen justify-center md:container">
          <PacmanLoader color="#FF7D1A" className="self-center" />
        </div>
      )}
    </>
  );
};
export default ItemList;
