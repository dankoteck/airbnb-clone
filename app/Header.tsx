"use client";

import { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import AirbnbFilterModal from "~/components/AirbnbFilterModal";
import CategorySlider from "~/components/CategorySlider";
import useScrollOffset from "~/hooks/useScrollOffset";

export default function Header() {
  const scrollPosition = useScrollOffset();
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const onOk = () => {
    console.log("OK");
  };

  return (
    <div
      className={`${
        scrollPosition > 0 ? "shadow-lg border-b border-b-slate-200" : ""
      } fixed transition duration-300  top-[83px] bg-white left-0 z-20 w-full`}
    >
      <div className="flex items-start justify-between py-4 gap-4 mx-auto lg:max-w-screen-2xl md:px-3.5 px-0">
        {/* Slider */}
        <CategorySlider />

        {/* Filter Modal */}
        <button
          aria-label="Airbnb Filters"
          onClick={onOpen}
          // Reference for setting min-w-0 here: https://stackoverflow.com/a/66689926/9937322
          className="hidden w-fit min-w-0 md:flex items-center justify-center px-3.5 py-2.5 text-sm border rounded-xl border-slate-200"
        >
          <AdjustmentsHorizontalIcon className="w-6 h-6 mr-1.5" />
          Filters
        </button>

        <AirbnbFilterModal open={open} onOk={onOk} onCancel={onCancel} />
      </div>
    </div>
  );
}
