import { useContext } from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/24/outline";
import { useCartDetails } from "@/context/useCartDetails";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice";

// Carrito de compras
const Cart = () => {
  // Contexto del carrito
  const { cartProducts, deleteCartProducts, qtyTotal, clearCart, getTotal } =
    useContext(useCartDetails);

  // Render del carrito
  return (
    <section className="container mx-auto w-full">
      <div className="mx-4 rounded-md">
        <h4 className="p-3 text-center text-lg font-bold">Carrito de compra</h4>
        <hr />
        {/* Mensaje de carrito vacío */}
        {cartProducts.length === 0 && (
          <p className="py-8 text-center">Tu carrito está vacío</p>
        )}
        {/* Tabla resumen */}
        {cartProducts.length !== 0 && (
          <div className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-4">
            <div className="text-center font-bold">Imagen</div>
            <div className="flex flex-row justify-between">
              <span className="font-bold">Descripción</span>
              <span className="font-bold">Precio total</span>
            </div>
          </div>
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
            <div className="self-center">
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
              className="ml-auto pt-4"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
      </div>
      {/* Detalles de la compra */}
      {cartProducts.length !== 0 && (
        <>
          <span className="container mx-auto mb-4 h-[1px] w-full bg-gray-300 md:block"></span>
          <div className="mx-8 mb-4 flex flex-col items-end gap-2">
            <p className="inline-block">Cantidad de items: {qtyTotal}</p>
            {getTotal() >= 22000 && (
              <>
                <div className="flex flex-row items-center">
                  <TruckIcon className="mr-1 h-4 w-4" />
                  <p className="font-bold text-orange-primary">Envío gratis</p>
                </div>
                <p className="inline-block text-xl font-bold">
                  Total: {formatPrice(getTotal())}
                </p>
              </>
            )}
            {getTotal() < 22000 && (
              <>
                <div className="flex flex-row items-center">
                  <TruckIcon className="mr-1 h-4 w-4" />
                  <p className="font-bold text-orange-primary">
                    Envío: {formatPrice(2000)}
                  </p>
                </div>
                <p className="inline-block text-xl font-bold">
                  Total: {formatPrice(getTotal())}
                </p>
              </>
            )}
            <Link to="/" className="flex flex-row items-center text-gray-500">
              <ArrowLongLeftIcon className="mr-1 h-4 w-4" />
              seguir comprando
            </Link>
          </div>
          {/* Vaciar carrito */}
          <span className="container mx-auto mb-4 h-[1px] w-full bg-gray-300 md:block"></span>
          <div className="container flex justify-end gap-20 px-8 pb-6">
            <span
              className="my-auto cursor-pointer font-thin underline"
              onClick={clearCart}
            >
              Vaciar carrito
            </span>
            {/* Ir a Checkout */}
            <Link to={`/checkout`}>
              <button className="w-60 rounded-md bg-orange-primary py-4 font-bold text-white transition-all hover:bg-orange-600">
                Ir a pagar
              </button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
