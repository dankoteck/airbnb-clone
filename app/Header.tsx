"use client";

import CategorySlider from "~/components/CategorySlider";
import Filter from "~/features/Filter";
import useScrollOffset from "~/hooks/useScrollOffset";

export default function Header() {
  const scrollPosition = useScrollOffset();

  return (
    <div
      className={`${
        scrollPosition > 0 ? "shadow-lg border-b border-b-slate-200" : ""
      } fixed transition duration-300  top-[83px] bg-white left-0 z-20 w-full`}
    >
      <div className="flex items-start justify-between py-4 gap-4 mx-auto lg:max-w-screen-2xl md:px-3.5 px-0">
        <CategorySlider />
        <Filter />
      </div>
    </div>
  );
}
