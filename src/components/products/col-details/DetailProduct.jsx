import { useContext, useState } from "react";
import CartIcon from "@/components/icons/CartIcon";
import CartIconAdd from "@/components/icons/CartIconAdd";
import { useCartDetails } from "@/context/useCartDetails";
import ItemCount from "@/components/products/col-details/ItemCount";
import ItemQuantity from "@/components/products/col-details/ItemQuantity";
import { formatPrice } from "../../utilities/formatPrice";

const DetailProduct = ({
  id = "",
  price = 0,
  category = "",
  title = "",
  color = "",
  description = "",
  discount = 0,
  stock = 0,
  img,
}) => {
  const { addCartProducts, cartProducts, viewCart } =
    useContext(useCartDetails);

  const isInCart = cartProducts.find((p) => p.id === id);

  const [count, setCount] = useState(1);

  const onAdd = () => {
    addCartProducts({
      id: id,
      title: title,
      color: color,
      img: img[0],
      discountPrice: (price * (1 - discount)).toFixed(2),
      qty: count === 0 ? 1 : count,
      stock: stock,
    });
    setCount(count);
  };

  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        {category}
      </p>
      <h2 className="mb-2 text-3xl font-bold">{title}</h2>
      <p className="mb-5 text-dark-grayish-blue">{description}</p>
      <div className="objProducts-center mb-5 grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">{formatPrice(price * (1 - discount))}</span>
        <span className="mr-auto rounded-md bg-pale-orange px-2 py-1 text-orange-primary">
          {discount * 100}%
        </span>
        <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
          {formatPrice(price)}
        </span>
      </div>
      {isInCart ? (
        <>
          <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
            <ItemQuantity count={count} />
            <button
              className="col-span-3 flex items-center justify-center gap-x-4 rounded-md bg-orange-primary py-3 font-bold text-white transition-all hover:bg-orange-600 md:col-span-1"
              onClick={viewCart}
            >
              <CartIconAdd fill="#fff" />
              <span>Ver en el carrito</span>
            </button>
          </div>
          <p className="py-3">¡Últimas {stock} unidades!</p>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
            <ItemCount count={count} setCount={setCount} stock={stock} />
            <button
              className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 font-bold text-white transition-all hover:bg-orange-600 md:col-span-1"
              onClick={onAdd}
            >
              <CartIcon fill="#fff" />
              <span>Agregar al carrito</span>
            </button>
          </div>
          <p className="py-3">¡Últimas {stock} unidades!</p>
        </>
      )}
    </section>
  );
};

export default DetailProduct;
