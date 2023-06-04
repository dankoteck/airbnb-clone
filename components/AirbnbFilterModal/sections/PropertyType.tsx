import { useState } from "react";
import { propertyTypeData } from "~/data";

export default function PropertyType({
  onSelect,
}: {
  onSelect?: (selected: number[]) => void;
}) {
  const [selected, setSelected] = useState<number[]>([]);

  const onSelected = (idx: number) => {
    const newSelected = selected.includes(idx)
      ? selected.filter((item) => item !== idx)
      : [...selected, idx];

    setSelected(newSelected);
    onSelect?.(newSelected);
  };

  return (
    <div className="w-full py-8 space-y-6 border-t border-t-slate-200">
      <h2 className="mb-6 text-2xl font-semibold">Property type</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {propertyTypeData.map(({ value, label, icon: Icon }, index) => (
          <button
            onClick={() => onSelected(index)}
            className={`${
              selected.includes(index)
                ? "outline-2 outline-gray-900"
                : "outline-1 outline-slate-300"
            } flex flex-col p-4 outline aspect-[4/3] w-full min-h-full items-start justify-between transition duration-300 rounded-xl hover:outline-gray-900`}
            key={value}
          >
            <span className="flex-grow-0 flex-shrink-0 mb-3 mr-4">
              <Icon className="w-8 h-8" />
            </span>
            <span className="block">
              <span className="font-medium">{label}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
