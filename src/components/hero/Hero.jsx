import imgWalletHero from "@/assets/images/billetera-portada.jpg";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroDisplay = useRef(null);

  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      heroDisplay.current.classList.add("hidden");
    } else {
      heroDisplay.current.classList.remove("hidden");
    }
  }, [idCategory]);

  return (
    <div
      ref={heroDisplay}
      className="mx-auto flex flex-col md:flex-row md:max-w-2xl items-center gap-2 py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="flex md:w-1/2 flex-col items-center gap-10">
        <h1 className="self-start text-6xl font-bold uppercase tracking-wide text-orange-primary">
          GEB WALLETS
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          officiis dolorum cum! Eum autem esse similique voluptas, molestiae et
          quas! Doloribus consequatur enim ab iste!
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <Link to={`/category/billeteras`}>
            <button className="flex w-fit items-center justify-center rounded-md bg-orange-primary p-5 py-3 font-bold text-white transition-all hover:bg-orange-600 md:col-span-1">
              Comprar Billeteras
            </button>
          </Link>
          <Link to={`/category/pulseras`}>
            <button className="flex w-fit items-center justify-center rounded-md bg-orange-primary p-5 py-3 font-bold text-white transition-all hover:bg-orange-600 md:col-span-1">
              Comprar Pulseras
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-1/2">
        <img src={imgWalletHero} alt="" className="aspect-square" />
      </div>
    </div>
  );
};
export default Hero;
