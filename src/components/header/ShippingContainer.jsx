import CartModal from "@/components/header/CartModal";

const ShippingContainer = ({ greeting, isOpenCart = false }) => {
  return (
    <div className="alert alert-info container relative mx-auto flex items-center gap-2 bg-slate-100 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 flex-shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span className="underline">{greeting}</span>
      {isOpenCart && <CartModal />}
    </div>
  );
};
export default ShippingContainer;
