import ShippingContainer from "@/components/header/ShippingContainer";
import Logo from "@/assets/images/GEB-Logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import CartWidget from "@/components/header/CartWidget";
import { useContext, useState } from "react";
import { useCartDetails } from "@/context/useCartDetails";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { handleCart, isOpenCart } = useContext(useCartDetails);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const viewCart = () => {
    handleCart();
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-2 py-2 pr-5 pl-5">
        <button className="pl-8 md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <Link to={"/"}>
          <img src={Logo} alt="Logo-GEB" className="w-20" />
        </Link>
        <Link to={"/"}>
          <span className="mr-auto pr-4 md:mr-0">GEB WALLETS</span>
        </Link>
        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:w-full md:flex-row md:justify-center md:gap-12 md:bg-transparent md:p-0 ${
            isOpenMenu
              ? "absolute top-0 left-0 z-30 flex h-full w-3/5 flex-col gap-y-8 bg-slate-300 p-10"
              : "hidden"
          }`}
        >
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <Link to={"/"}>
            <NavLink text="Inicio" />
          </Link>
          <Link to={"/category/billeteras"}>
            <NavLink text="Billeteras" />
          </Link>
          <Link to={"/category/pulseras"}>
            <NavLink text="Pulseras" />
          </Link>
        </nav>
        <div className="flex gap-4 pr-8">
          <button onClick={viewCart}>
            <CartWidget />
          </button>
          <img src={Avatar} alt="Avatar-User" className="w-14" />
        </div>
      </header>
      <span className="container mx-auto h-[1px] w-full bg-gray-500 md:block"></span>
      <ShippingContainer
        isOpenCart={isOpenCart}
        greeting="Envíos a todo el país. A partir de $20.000 el envío es gratis."
      />
    </>
  );
};
export default NavBar;
