import { useEffect, useRef, useState } from "react";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const SliderProduct = ({
  array_imgs = [],
  array_imgs_thumbnail = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const btnSlider = useRef(null);
  const cursorStyle = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  useEffect(() => {
    if (isOpenModal) {
      cursorStyle.current.classList.remove("cursor-zoom-in");
      cursorStyle.current.classList.add("cursor-default");
    }
  }, [isOpenModal]);

  const handleClickNext = () => {
    index === array_imgs.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(array_imgs.length - 1) : setIndex(index - 1);
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button
          className="text-dark-grayish-blue md:col-span-4 md:text-right"
          onClick={handleCloseModal}
        >
          X
        </button>
      )}
      <div className="relative col-span-4">
        <img
          ref={cursorStyle}
          src={array_imgs[index]}
          alt=""
          className="aspect-[16/9] md:aspect-[16/19] w-full cursor-zoom-in md:rounded-md"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
        >
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-300"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-300"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {array_imgs_thumbnail.map((img, i) => (
        <div
          key={img}
          onClick={() => {
            setIndex(i);
          }}
          className="relative cursor-pointer overflow-hidden rounded-md"
        >
          <img src={img} alt="" className="hidden md:block md:rounded-md" />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index && "bg-[rgba(255,255,255,0.5)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default SliderProduct;
