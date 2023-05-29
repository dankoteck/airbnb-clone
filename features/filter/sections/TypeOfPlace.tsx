"use client";

import { useAppSelector } from "~/store";
import { selectFilter } from "../filterSlice";

// Hard code for now
const prices = [
  {
    value: "all",
    price: "$535 avg.",
    describe:
      "Browse rooms, homes and more. Average nightly prices don't include fees or taxes.",
  },
  {
    value: "rooms",
    price: "$107 avg.",
    describe:
      "Your own room in a home, plus access to shared spaces. Average nightly prices don't include fees or taxes.",
  },
  {
    value: "homes",
    price: "$544 avg.",
    describe:
      "A home all to yourself. Average nightly prices don't include fees or taxes.",
  },
];

export default function TypeOfPlace() {
  const state = useAppSelector(selectFilter);
  const { typeOfPlace } = state;
  const currentType = prices.find((item) => item.value === typeOfPlace);

  return (
    <div className="">
      <div
        aria-label="Type of place"
        className="flex items-center p-2 ml-4 transition duration-300 border shadow-lg cursor-pointer select-none lg:ml-0 border-slate-200 rounded-2xl hover:shadow-xl"
        role="group"
      >
        <div
          role="button"
          aria-label="All types"
          className="flex items-center justify-center px-6 py-2 text-sm font-medium truncate bg-gray-700 border-r rounded-l-lg border-r-slate-200 focus:z-10 focus:ring-2"
        >
          <span className="font-medium text-white">All types</span>
          <span className="text-gray-500">{prices[0].price}</span>
        </div>
        <div
          role="button"
          aria-label="Rooms"
          className="flex items-center justify-center px-6 py-2 text-sm font-medium truncate bg-gray-700 border-r border-r-slate-200 focus:z-10 focus:ring-2 "
        >
          <span className="font-medium text-white">Rooms</span>
          <span className="text-gray-500">{prices[1].price}</span>
        </div>
        <div
          role="button"
          aria-label="Homes"
          className="flex items-center justify-center px-6 py-2 text-sm text-gray-400 truncate bg-gray-700 rounded-r-lg focus:z-10 focus:ring-2"
        >
          <span className="font-medium text-white">Homes</span>
          <span className="text-gray-500">{prices[2].price}</span>
        </div>
      </div>

      <p className="">{currentType?.describe}</p>
    </div>
  );
}
