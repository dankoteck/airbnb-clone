import { useState } from "react";

function SelectOption({ label }: { label: string }) {
  const [selected, setSelected] = useState<number>(0);

  const onChooseOption = (num: number) => {
    setSelected(num);
  };

  return (
    <div className="space-y-6" key={label}>
      <h3 className="text-base font-normal text-gray-700">{label}</h3>

      <div className="flex gap-2">
        <button
          className={`${
            selected === 0 ? "bg-black text-white" : "bg-white text-black"
          } py-2 hover:border-gray-700 text-sm border rounded-full px-7 border-slate-300`}
        >
          Any
        </button>

        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onChooseOption(num)}
            className={`${
              selected === num ? "bg-black text-white" : ""
            } transition duration-300 hover:border-gray-700 px-6 py-2 text-sm border rounded-3xl border-slate-300`}
          >
            {num}
            {/* last item will add plus for above */}
            {num === 8 ? "+" : ""}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function RoomsAndBeds() {
  return (
    <div className="w-full py-8 space-y-6 border-t border-t-slate-200">
      <h2 className="mb-6 text-2xl font-semibold">Rooms and beds</h2>

      {["Bedrooms", "Beds", "Bathrooms"].map((label) => (
        <SelectOption label={label} key={label} />
      ))}
    </div>
  );
}
