import { Link } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice";

const Items = ({ items, idCategory }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
          {idCategory ? idCategory : "Productos Destacados"}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <div className="group relative rounded-md p-2">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-400 drop-shadow-lg group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={item.pictureUrl}
                    alt={item.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.title}
                      </div>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {formatPrice(item.price * (1 - item.discount))}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Items;
