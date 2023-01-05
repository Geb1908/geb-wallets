import imgCart from "@/assets/images/billetera_iso-cart.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

const CartDetailsWidget = () => {
  return (
    <section className="absolute z-10 top-[125%] left-0 w-full md:max-w-md">
            <div className="mx-4 bg-slate-300 rounded-md drop-shadow-lg">
              <h4 className="px-6 py-8 font-bold text-lg">Cart</h4>
              <hr />
              <div className="grid gap-4 grid-cols-[1fr_4fr_1fr] p-10 ">
                <img src={imgCart} alt="" className="rounded-md"/>
                <div>
                  <h6>Billetera Pop-Up</h6>
                  <p>
                    <span>$8100 x 1</span>
                    <span className="font-bold">
                      $8100
                    </span>
                  </p>
                </div>
                <button className="ml-auto">
                  <DeleteIcon className="hover:fill-orange-primary"/>
                </button>
              </div>
              <div className="px-4 pb-6">
                <button className="py-4 w-full bg-orange-primary rounded-md text-white hover:bg-orange-600 transition-all">
                  Comprar
                </button>
              </div>
            </div>
          </section>
  )
}
export default CartDetailsWidget