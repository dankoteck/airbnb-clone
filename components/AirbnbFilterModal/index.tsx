"use client";

import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { Fragment, MouseEvent, useEffect, useRef } from "react";

import {
  accessibilityFeaturesData,
  amentitiesData,
  bookingOptionsData,
  hostLanguagesData,
  topTierStaysData,
} from "~/data";

import PriceRange from "./sections/PriceRange";
import PropertyType from "./sections/PropertyType";
import RoomsAndBeds from "./sections/RoomsAndBeds";
import TypeOfPlace from "./sections/TypeOfPlace";

import CheckboxList from "./common/CheckboxList";
import SwitchList from "./common/SwitchList";
import { useWindowSize } from "~/hooks/useWindowSize";

export default function AirbnbFilterModal({
  open,
  onOk,
  onCancel,
}: {
  open: boolean;
  onOk?: (evt: MouseEvent<HTMLButtonElement>) => void;
  onCancel?: () => void;
}) {
  const cancelButtonRef = useRef(null);

  const handleCancel = () => {
    onCancel?.();
  };

  const handleOk = (evt: MouseEvent<HTMLButtonElement>) => {
    onOk?.(evt);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={handleCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-30">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 w-full min-h-screen md:min-h-full md:h-auto md:w-[780px]">
                <div className="bg-white">
                  <div className="flex items-start w-full">
                    <div className="w-full text-left">
                      <Dialog.Title className="flex items-center justify-between w-full h-12 px-6 font-semibold leading-6 text-center text-gray-900 border-b border-b-slate-200 md:h-16">
                        <button
                          aria-label="Close Modal"
                          className="justify-self-start"
                          onClick={handleCancel}
                        >
                          <AiOutlineClose />
                        </button>
                        <p>Filters</p>
                        <div />
                      </Dialog.Title>

                      {/* Contents */}
                      {/* 81px for footer's height */}
                      {/* 48x for header's height */}
                      {/* 32px for margin top from modal */}
                      {/* In medium or larger screen, first 64px for margin-y from modal, second 64px is for header's height */}
                      <div className="px-6 overflow-y-auto max-h-[calc(100vh-48px-32px-81px)] md:max-h-[calc(100vh-64px-64px-81px)]">
                        <TypeOfPlace />
                        <PriceRange />
                        <RoomsAndBeds />
                        <PropertyType />
                        <CheckboxList
                          title="Amentities"
                          data={amentitiesData}
                        />
                        <SwitchList
                          title="Booking options"
                          data={bookingOptionsData}
                        />
                        <CheckboxList
                          title="Accessibility features"
                          data={accessibilityFeaturesData}
                        />
                        <SwitchList
                          title="Top tier stays"
                          data={topTierStaysData}
                        />
                        <CheckboxList
                          title="Host language"
                          data={hostLanguagesData}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  role="group"
                  aria-label="Modal Footer"
                  className="flex flex-row-reverse justify-between px-6 py-4 border-t border-t-slate-200"
                >
                  <button
                    aria-label={`Show ${5} homes`}
                    className="px-6 py-3 font-semibold text-white bg-black rounded-md"
                    onClick={handleOk}
                  >
                    Show {5} homes
                  </button>

                  <button
                    aria-label="Clear all"
                    className="font-medium text-gray-900 underline"
                    onClick={handleCancel}
                    ref={cancelButtonRef}
                  >
                    Clear all
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
