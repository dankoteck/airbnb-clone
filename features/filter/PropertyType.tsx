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

      <div className="flex gap-4">
        {propertyTypeData.map(({ value, label, icon: Icon }, index) => (
          <div
            role="button"
            onClick={() => onSelected(index)}
            className={`${
              selected.includes(index)
                ? "outline-2 outline-gray-900"
                : "outline-1 outline-slate-300"
            } flex flex-col outline items-start justify-between flex-1 min-w-0 gap-10 p-4 transition duration-300 rounded-2xl hover:outline-gray-900`}
            key={value}
          >
            <Icon className="font-normal w-7 h-7" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
