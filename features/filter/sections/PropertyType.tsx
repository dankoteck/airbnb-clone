import { BsHouse } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { MdOutlineWarehouse } from "react-icons/md";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { useState } from "react";

const list = [
  {
    icon: <BsHouse className="font-normal w-7 h-7" />,
    label: "House",
    value: "house",
  },
  {
    icon: <BiBuildings className="font-normal w-7 h-7" />,
    label: "Apartment",
    value: "apartment",
  },
  {
    icon: <MdOutlineWarehouse className="font-normal w-7 h-7" />,
    label: "Guesthouse",
    value: "guesthouse",
  },
  {
    icon: <HiOutlineBuildingOffice className="font-normal w-7 h-7" />,
    label: "Hotel",
    value: "hotel",
  },
];

export default function PropertyType() {
  const [selected, setSelected] = useState<number[]>([]);

  const onSelected = (idx: number) => {
    if (selected.includes(idx)) {
      setSelected(selected.filter((item) => item !== idx));
    } else {
      setSelected([...selected, idx]);
    }
  };

  return (
    <div className="w-full py-8 space-y-6 border-t border-t-slate-200">
      <h2 className="mb-6 text-2xl font-semibold">Property type</h2>

      <div className="flex gap-4">
        {list.map((item, index) => (
          <div
            role="button"
            onClick={() => onSelected(index)}
            className={`${
              selected.includes(index)
                ? "outline-2 outline-gray-900"
                : "outline-1 outline-slate-300"
            } flex flex-col outline items-start justify-between flex-1 min-w-0 gap-10 p-4 transition duration-300 rounded-2xl hover:outline-gray-900`}
            key={item.value}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
