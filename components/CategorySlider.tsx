"use client";

import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SwiperCore, { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import categories from "~/data/categories";

const ANIMATING_SPEED: number = 800; // in milisecond
const BREAKPOINTS: SwiperOptions["breakpoints"] = {
  // Small screen
  820: {
    slidesPerView: 7,
    slidesPerGroup: 3,
  },
  // Medium screen
  1080: {
    slidesPerView: 8,
    slidesPerGroup: 4,
  },
  // Large screen
  1280: {
    slidesPerView: 11,
    slidesPerGroup: 5,
  },
  // XLarge screen
  1450: {
    slidesPerView: 13,
    slidesPerGroup: 6,
  },
};

export default function CategorySlider({
  onSlideChange,
}: {
  onSlideChange?: (index: number) => void;
}) {
  const ref = useRef<SwiperCore>();

  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
    onSlideChange?.(swiper.realIndex);
  };

  return (
    <div className="relative w-full md:w-[90%] px-4 md:p-0">
      <Swiper
        updateOnWindowResize
        slidesPerView={7}
        speed={ANIMATING_SPEED}
        breakpoints={BREAKPOINTS}
        onBeforeInit={(swiper) => (ref.current = swiper)}
        onSlideChange={handleSlideChange}
        className="w-[95%]"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.label}
            role="link"
            aria-label={"Category " + category.label}
            className="!flex flex-col items-center justify-center gap-2 w-fit"
          >
            <category.icon className="w-6 h-6 !text-gray-500" />
            <span className="text-xs text-gray-500">{category.label}</span>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Arrow */}
      <button
        onClick={() => ref?.current?.slidePrev()}
        aria-label="Previous slide"
        className={`${
          isBeginning ? "!opacity-0" : "!opacity-100"
        } z-50 absolute top-[15%] hidden md:block left-0 hover:shadow-lg bg-white p-1 rounded-full border border-slate-200 hover:border-slate-300 transition duration-300`}
      >
        <MdKeyboardArrowLeft className="w-5 h-5 font-semibold" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => ref?.current?.slideNext()}
        aria-label="Next slide"
        className={`${
          isEnd ? "!opacity-0" : "!opacity-100"
        } z-50 absolute top-[15%] hidden md:block left-auto right-0 hover:shadow-lg bg-white p-1 rounded-full border border-slate-200 hover:border-slate-300 transition duration-300`}
      >
        <MdKeyboardArrowRight className="w-5 h-5 font-semibold" />
      </button>
    </div>
  );
}
