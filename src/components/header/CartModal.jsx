import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice";

const CartModal = () => {
  const { cartProducts, deleteCartProducts, viewCart } =
    useContext(useCartDetails);

  return (
    <section className="absolute top-[25%] left-0 z-20 w-full rounded-md bg-slate-300 drop-shadow-lg md:left-full md:top-0 md:w-3/4 md:max-w-xl md:-translate-x-full">
      <div className="mx-4 rounded-md">
        <h4 className="p-3 font-bold">Carrito de compra</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-8 text-center">Tu carrito está vacío</p>
        )}
        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-4"
          >
            <img
              src={product.img}
              alt={`Item ${product.id}`}
              className="rounded-md"
            />
            <div>
              <h6 className="font-bold">{`${product.title} ${product.color}`}</h6>
              <p className="flex flex-row justify-between">
                <span>
                  {formatPrice(product.discountPrice)} x {product.qty}
                </span>
                <span className="font-bold">
                  {formatPrice(product.discountPrice * product.qty)}
                </span>
              </p>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
      </div>
      {cartProducts.length !== 0 && (
        <div className="px-8 pb-6">
          <Link to={`/cart`}>
            <button
              className="w-full rounded-md bg-orange-primary py-4 font-bold text-white transition-all hover:bg-orange-600"
              onClick={viewCart}
            >
              Comprar
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};
export default CartModal;
