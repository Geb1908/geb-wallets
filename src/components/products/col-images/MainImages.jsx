import SliderProduct from "@/components/products/col-images/SliderProduct";
import ModalProduct from "@/components/products/col-images/SliderProduct";
import { useState } from "react";

const MainImages = ({ array_imgs, array_imgs_thumbnail }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => window.innerWidth > 767 && setIsOpenModal(true);

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <SliderProduct
        array_imgs={array_imgs}
        array_imgs_thumbnail={array_imgs_thumbnail}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <ModalProduct
            array_imgs={array_imgs}
            array_imgs_thumbnail={array_imgs_thumbnail}
            isOpenModal={isOpenModal}
            className="hidden object-cover md:absolute md:top-1/2 md:left-1/2 md:z-50 md:grid md:max-w-2xl md:-translate-x-1/2 md:-translate-y-[calc(50vh-88px-1px-56px)] md:grid-cols-4 md:gap-4 xl:max-w-lg xl:-translate-y-[calc(68vh-88px-1px-56px)]"
            handleCloseModal={handleCloseModal}
          />
          <span className="fixed top-0 left-0 h-full w-full bg-black/80"></span>
        </>
      )}
    </>
  );
};
export default MainImages;
