import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCartDetails } from "@/context/useCartDetails";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { formatPrice } from "../utilities/formatPrice";

// Checkout
const Checkout = () => {
  // Context del carrito
  const { cartProducts, qtyTotal, clearCart, getTotal } =
    useContext(useCartDetails);

  // Use states que permiten obtener el id de la compra, mostrar un modal final y obtener los datos del cliente
  const [idCompra, setIdCompra] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirm: "",
  });

  // Expresiones regulares para los campos e-mail y teléfono
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const telephoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;

  // Obtener información acerca de la fecha en que se realizó la compra
  const orderDate = new Date().toLocaleDateString();

  // Obtener los datos del cliente
  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  // Generación de la orden, con información del cliente, los items, el precio y la fecha en que se realizó la compra
  const sendOrder = () => {
    const order = {
      buyer,
      item: cartProducts,
      price: getTotal(),
      date: orderDate,
    };
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setIdCompra(id));
  };

  // Render del checkout
  return (
    <>
      {/* Contenedor checkout */}
      <div className="mx-auto flex items-center justify-center xl:mx-auto xl:max-w-7xl">
        <div className="flex w-full flex-col items-center justify-center">
          {/* Título */}
          <h1 className=" my-6 self-start text-2xl font-bold">Checkout</h1>

          {/* Información de la compra */}
          <div className="flex w-full flex-col items-start justify-start lg:flex-row">
            {/* Resúmen */}
            <div className="mr-6 flex w-full flex-col self-start md:w-1/2">
              <h2 className="self-start text-xl font-bold">Resúmen</h2>
              <div className="mt-6 flex flex-col border border-gray-200 p-4">
                <div className="flex flex-row justify-between ">
                  <p>Cantidad de items:</p>
                  <p>{qtyTotal}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Gastos de envío:</p>
                  <p>
                    {getTotal() < 22000 ? formatPrice(2000) : "Envío gratis"}
                  </p>
                </div>
                <div className="mt-10 flex flex-row justify-between font-semibold ">
                  <p>Total:</p>
                  <p>{formatPrice(getTotal())}</p>
                </div>
              </div>
              <Link
                to="/cart"
                className=" mt-3 flex flex-row items-center lowercase"
              >
                <ArrowLongLeftIcon className="mr-1 h-4 w-4" />
                Volver al carrito
              </Link>
            </div>

            {/* Detalle de facturación */}
            <div className="mt-6 mb-3 flex w-full flex-col items-start justify-start lg:mt-0">
              {/* Formulario */}
              <form className="space-y-6">
                <h2 className="self-start text-xl font-bold">
                  Detalles de facturación
                </h2>
                <input
                  className="w-full border-b border-gray-200 px-2 py-4 placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-white "
                  id="name"
                  type="text"
                  name="name"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Nombre"
                />
                <input
                  className="w-full border-b border-gray-200 px-2 py-4 placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-white "
                  id="surname"
                  type="text"
                  name="surname"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Apellido"
                />
                <input
                  className="w-full border-b border-gray-200 px-2 py-4 placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-white "
                  id="telephone"
                  type="tel"
                  name="telephone"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                />
                <input
                  className="w-full border-b border-gray-200 px-2 py-4 placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-white "
                  id="email"
                  type="email"
                  name="email"
                  required
                  onChange={handleSubmitChange}
                  placeholder="E-mail"
                />
                <input
                  className="w-full border-b border-gray-200 px-2 py-4 placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-white "
                  id="emailConfirm"
                  type="email"
                  name="emailConfirm"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Confirmar e-mail"
                />
              </form>

              {/* Si se validan todas las entradas, se habilita el botón para proceder con el pago */}
              {buyer.name &&
              buyer.surname &&
              buyer.telephone &&
              buyer.email === buyer.emailConfirm &&
              telephoneRegex.test(buyer.telephone) &&
              emailRegex.test(buyer.email, buyer.emailConfirm) ? (
                // Botón habilitado
                <input
                  onClick={() => {
                    sendOrder();
                    setShowModal(true);
                  }}
                  className=" mt-6 w-full cursor-pointer bg-gray-700 py-3 text-center text-white focus:outline-none focus:ring-transparent"
                  type="submit"
                  value="Proceder al pago"
                />
              ) : (
                // Botón deshabilitado
                <input
                  className=" mt-6 w-full bg-gray-400 py-3 text-center text-white focus:outline-none focus:ring-transparent"
                  type="submit"
                  value="Proceder al pago"
                  disabled
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor modal final */}
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } fixed inset-0 h-full w-full bg-gray-800`}
      >
        <div className="container mx-auto items-center justify-center place-self-center px-4 py-20 md:px-10">
          <div className="flex flex-col items-center justify-center bg-white px-3 py-12 md:px-4">
            <h2 className="text-center md:w-9/12 lg:w-7/12">
              ¡Muchas gracias por tu compra {buyer.name.toUpperCase()}!
            </h2>
            <p className="mt-6 text-center md:w-9/12 lg:w-7/12 ">
              Te enviamos un mail a {buyer.email.toLowerCase()} con tu orden de
              compra ID: {idCompra}. Esperamos que hayas tenido una agradable
              experiencia en GEB WALLETS. ¡Hasta la próxima!
            </p>
            <Link to="/" className="mt-6 flex justify-center">
              <button
                onClick={clearCart}
                className=" w-40 cursor-pointer bg-gray-700 py-3 text-center text-white focus:outline-none focus:ring-transparent"
              >
                Volver al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
