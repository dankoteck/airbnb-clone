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
    setOpen(true);
  };

  return (
    <>
      <button
        aria-label="Airbnb Filters"
        onClick={onOpen}
        className="hidden md:w-[10%] md:flex items-center px-3.5 py-2.5 text-sm border rounded-xl border-slate-200"
      >
        <AdjustmentsHorizontalIcon className="w-5 h-5 mr-1.5" />
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
        <TypeOfPlace />
        {/* <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Amenities />
        <BookingOptions />
        <AccessibilityFeatures />
        <TopTierStays />
        <HostLanguague /> */}
      </Modal>
    </>
  );
}
