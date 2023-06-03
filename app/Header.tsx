"use client";

import { useEffect, useState } from "react";
import CategorySlider from "~/components/CategorySlider";
import Filter from "~/features/Filter";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
