import { useAppDispatch, useAppSelector } from "~/store";
import { selectFilter, updateTypeOfPlace } from "./filterSlice";
import { LottieOptions, useLottie } from "lottie-react";
import allOfBuildings from "~/assets/lotties/all-types.json";
import rooms from "~/assets/lotties/rooms.json";
import homes from "~/assets/lotties/homes.json";

// Hard code for now
const types = [
  {
    value: "all",
    amount: "$535 avg.",
    label: "All types",
    lottie: allOfBuildings,
    describe:
      "Browse rooms, homes and more. Average nightly prices don't include fees or taxes.",
  },
  {
    value: "rooms",
    amount: "$107 avg.",
    label: "Rooms",
    lottie: rooms,
    describe:
      "Your own room in a home, plus access to shared spaces. Average nightly prices don't include fees or taxes.",
  },
  {
    value: "homes",
    amount: "$544 avg.",
    label: "Homes",
    lottie: homes,
    describe:
      "A home all to yourself. Average nightly prices don't include fees or taxes.",
  },
];

export default function TypeOfPlace() {
  const state = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const { typeOfPlace } = state;
  const currentType = types.find((item) => item.value === typeOfPlace);

  const options: LottieOptions<"svg"> = {
    animationData: currentType?.lottie,
    loop: false,
    className: "w-full h-full",
  };
  const { View } = useLottie(options);

  const handleChangeType = (value: typeof typeOfPlace) => {
    dispatch(updateTypeOfPlace(value));
  };

  return (
    <div className="flex items-center gap-0 overflow-hidden">
      <div className="flex flex-col flex-1 min-w-0 py-4 gap-y-4">
        <h2 className="mb-2 text-2xl font-semibold">Type of place</h2>

        <div
          aria-label="Type of place"
          className="flex items-center transition duration-300 border select-none lg:ml-0 border-slate-200 rounded-2xl"
          role="group"
        >
          {types.map((type, index) => (
            <div
              role="button"
              key={type.value}
              onClick={() => handleChangeType(type.value as typeof typeOfPlace)}
              aria-label={type.label}
              className={`${
                typeOfPlace === type.value
                  ? "bg-black shadow-inner"
                  : "bg-transparent shadow-none"
              } ${
                index === 0
                  ? "rounded-l-xl"
                  : index === types.length - 1
                  ? "rounded-r-xl !border-r-0"
                  : ""
              } flex flex-col items-center justify-center flex-1 min-w-0 px-10 py-4 text-sm font-medium truncate border-r border-r-slate-200 focus:z-10 focus:ring-2`}
            >
              <span
                className={`${
                  typeOfPlace === type.value ? "text-white" : "text-black"
                } font-medium `}
              >
                {type.label}
              </span>
              <span className={`font-light text-gray-400`}>{type.amount}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">{currentType?.describe}</p>
      </div>

      <div className="flex-1 min-w-0 !h-72">{View}</div>
    </div>
  );
}
