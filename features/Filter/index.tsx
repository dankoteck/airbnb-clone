"use client";

import { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import Modal from "~/components/Modal";

import {
  accessibilityFeaturesData,
  amentitiesData,
  bookingOptionsData,
  hostLanguagesData,
  topTierStaysData,
} from "~/data";

import TypeOfPlace from "./TypeOfPlace";
import PriceRange from "./PriceRange";
import RoomsAndBeds from "./RoomsAndBeds";
import PropertyType from "./PropertyType";

import CheckboxList from "./common/CheckboxList";
import SwitchList from "./common/SwitchList";

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
        <div className="px-6 overflow-y-auto max-h-[700px]">
          <TypeOfPlace />
          <PriceRange />
          <RoomsAndBeds />
          <PropertyType />
          <CheckboxList title="Amentities" data={amentitiesData} />
          <SwitchList title="Booking options" data={bookingOptionsData} />
          <CheckboxList
            title="Accessibility features"
            data={accessibilityFeaturesData}
          />
          <SwitchList title="Top tier stays" data={topTierStaysData} />
          <CheckboxList title="Host language" data={hostLanguagesData} />
        </div>
      </Modal>
    </>
  );
}
