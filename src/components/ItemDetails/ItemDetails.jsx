import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "@/components/ItemDetails/Item";
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemList = () => {
  const { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "billeteras", id);
    getDoc(queryDoc)
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {item ? (
        <Item item={item} />
      ) : (
        <div className="mx-auto flex h-[70vh] justify-center md:container">
          <PacmanLoader color="#FF7D1A" className="self-center" />
        </div>
      )}
    </>
  );
};
export default ItemList;
