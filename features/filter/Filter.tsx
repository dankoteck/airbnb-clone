"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "~/components/Modal";
import TypeOfPlace from "./sections/TypeOfPlace";

export default function Filter() {
  const [open, setOpen] = useState(false);

  const onOk = (value: any) => {
    console.log(value);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        aria-label="Airbnb Filters"
        onClick={onOpen}
        // Reference for setting min-w-0 here: https://stackoverflow.com/a/66689926/9937322
        className="hidden w-fit min-w-0 md:flex items-center justify-center px-3.5 py-2.5 text-sm border rounded-xl border-slate-200"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6 mr-1.5" />
        Filters
      </button>

      <Modal
        closable
        open={open}
        onCancel={onCancel}
        onOk={onOk}
        title="Filters"
        okText="Show 5 homes"
        cancelText="Clear all"
      >
        <div className="px-6">
          <TypeOfPlace />
          {/* <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Amenities />
        <BookingOptions />
        <AccessibilityFeatures />
        <TopTierStays />
        <HostLanguague /> */}
        </div>
      </Modal>
    </>
  );
}
