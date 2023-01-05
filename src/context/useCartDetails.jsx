import { createContext, useState } from "react";

// Contexto del carrito
export const useCartDetails = createContext();

export default (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Agregar un item al carrito
  const addCartProducts = (product) => {
    if (cartProducts.length === 0) {
      return setCartProducts([...cartProducts, product]);
    } else {
      const currentProduct = cartProducts.find((p) => p.id === product.id);
      if (currentProduct) {
        setCartProducts(
          cartProducts.map((item) => {
            if (item.id === product.id) {
              return { ...item, qty: item.qty + product.qty };
            } else {
              return item;
            }
          })
        );
      } else {
        setCartProducts([...cartProducts, product]);
      }
    }
  };

  // Eliminar un item del carrito
  const deleteCartProducts = (id) => {
    setCartProducts(cartProducts.filter((item) => item.id !== id));
  };

  //Mostrar y ocultar Cart Modal
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const viewCart = () => {
    handleCart();
  };

  // Obtener número total de items
  const qtyTotal = cartProducts.reduce((acc, current) => current.qty + acc, 0);

  // Limpiar el carrito
  const clearCart = () => {
    setCartProducts([]);
  };

  // Obtener el total
  const getTotal = () => {
    let subtotal = 0;
    let total = 0;
    cartProducts.forEach((item) => {
      subtotal = subtotal + item.qty * item.discountPrice;
      subtotal < 20000 ? (total = subtotal + 2000) : (total = subtotal);
    });
    return Number(total);
  };

  return (
    <useCartDetails.Provider
      value={{
        cartProducts,
        addCartProducts,
        deleteCartProducts,
        qtyTotal,
        handleCart,
        isOpenCart,
        clearCart,
        viewCart,
        getTotal,
      }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
