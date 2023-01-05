import { HashRouter, Route, Routes } from "react-router-dom";
import UseCartDetails from "@/context/useCartDetails";
import NavBar from "@/components/header/NavBar";
import ItemListContainer from "@/components/ItemList/ItemListContainer";
import ItemDetailsContainer from "@/components/ItemDetails/ItemDetailsContainer";
import Cart from "@/components/cart/Cart";
import Footer from "@/components/footer/Footer";
import Checkout from "@/components/checkout/Checkout";

// ¡ACLARACION! //
// Se utiliza HashRouter en vez de BrowserRouter //
// para el correcto funcionamiento de la app en Netlify //

const App = () => {
  return (
    <UseCartDetails>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </HashRouter>
    </UseCartDetails>
  );
};

export default App;
