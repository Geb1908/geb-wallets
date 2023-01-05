import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCartDetails } from "@/context/useCartDetails";

const CartWidget = () => {
  const { qtyTotal } = useContext(useCartDetails);

  return (
    <div className="ml-4 flow-root lg:ml-6">
      <p className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {qtyTotal}
        </span>
      </p>
    </div>
  );
};
export default CartWidget;
