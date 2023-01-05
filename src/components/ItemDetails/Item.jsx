import DetailProduct from "@/components/products/col-details/DetailProduct";
import MainImages from "@/components/products/col-images/MainImages";

const Item = ({ item }) => {
  return (
    <main className="mx-auto mb-4 grid grid-cols-1 items-center gap-20 md:container md:min-h-[calc(100vh-88px-1px-56px)] md:grid-cols-2 xl:w-4/5">
      <MainImages
        array_imgs={item.imagesMain}
        array_imgs_thumbnail={item.imagesThumb}
      />
      <DetailProduct
        id={item.id}
        price={item.price}
        category={item.category}
        title={item.title}
        color={item.color}
        description={item.description}
        discount={item.discount}
        stock={item.stock}
        img={item.imagesThumb}
      />
    </main>
  );
};

export default Item;
