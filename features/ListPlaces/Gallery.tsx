"use client";

import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import Image from "next/image";
import { useRef, useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AirbnbHeartIcon from "~/components/AirbnbHeartIcon";

type GalleryItem = {
  href: string;
  alt: string;
};

export default function Gallery({
  onSlideChange,
  data,
  id,
}: {
  onSlideChange?: (index: number) => void;
  data: GalleryItem[];
  id: string | number;
}) {
  const ref = useRef<SwiperCore>();

  const [isShow, setIsShow] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  const toggleShowArrow = () => {
    setIsShow(!isShow);
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
    onSlideChange?.(swiper.realIndex);
  };

  const onSaveToList = () => {
    console.log("Item: ", id);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={toggleShowArrow}
      onMouseLeave={toggleShowArrow}
    >
      <Swiper
        updateOnWindowResize
        slidesPerView={1}
        onBeforeInit={(swiper) => (ref.current = swiper)}
        onSlideChange={handleSlideChange}
        pagination={{
          renderBullet(_, className) {
            return `<span role="button" aria-label="dot" class="${className} !w-1.5 !h-1.5 bg-white !mx-0.5"></span>`;
          },
        }}
        modules={[Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide key={`${item.href}-${item.alt}`}>
            <div className="aspect-w-1 aspect-h-1" role="figure">
              <Image
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={item.href}
                alt={item.alt ?? "No image provided"}
                className="object-cover object-center w-full h-full rounded-xl"
              />
            </div>
            <button
              onClick={onSaveToList}
              aria-label="Save to list"
              className="absolute top-4 right-4"
            >
              <AirbnbHeartIcon />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Arrow */}
      <button
        onClick={() => ref?.current?.slidePrev()}
        aria-label="Previous slide"
        className={`${
          !isBeginning && isShow ? "opacity-100" : "opacity-0"
        } z-10 absolute top-[47%] hidden md:block left-4 shadow-lg bg-white p-1 rounded-full border border-slate-200 hover:border-slate-300 transition duration-300`}
      >
        <MdKeyboardArrowLeft className="w-5 h-5 font-semibold" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => ref?.current?.slideNext()}
        aria-label="Next slide"
        className={`${
          !isEnd && isShow ? "opacity-100" : "opacity-0"
        } z-10 absolute top-[47%] hidden md:block left-auto right-4 shadow-lg bg-white p-1 rounded-full border border-slate-200 hover:border-slate-300 transition duration-300`}
      >
        <MdKeyboardArrowRight className="w-5 h-5 font-semibold" />
      </button>
    </div>
  );
}
