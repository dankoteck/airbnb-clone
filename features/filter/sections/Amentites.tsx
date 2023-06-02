import { ChangeEvent, useState } from "react";
import amentitiesData from "~/data/amentities";

export default function Amenities() {
  const [isShowMore, setIsShowMore] = useState(false);

  const onSelectOption = (evt: ChangeEvent<HTMLInputElement>) => {
    // TODO: Redux action goes here.
    console.log(evt.target.value);
  };

  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="w-full py-8 border-t border-t-slate-200">
      <h2 className="text-2xl font-semibold">Amentities</h2>

      {amentitiesData.map((group, index) => (
        <ul
          key={group.groupBy}
          className={`${
            index === 0 || isShowMore ? "block" : "hidden"
          } grid w-full grid-cols-2 text-sm font-medium bg-white rounded-lg`}
        >
          <li className="mt-6 mb-2.5 text-lg font-medium">{group.label}</li>
          <li />
          {group.items.map((item) => (
            <li
              key={`${group.groupBy}-${item.value}`}
              className="flex items-center w-full gap-4 py-3 group"
            >
              <input
                id={`${group.groupBy}-${item.value}`}
                type="checkbox"
                value={`${group.groupBy}:${item.value}`}
                onChange={onSelectOption}
                className="w-6 h-6 text-black border-gray-400 rounded-md cursor-pointer focus:outline-none focus:ring-0 group-hover:border-gray-700"
              />
              <label
                htmlFor={`${group.groupBy}-${item.value}`}
                className="w-full min-w-0 text-base font-light cursor-pointer"
              >
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      ))}

      <button
        className="pt-2 text-lg font-medium underline"
        onClick={toggleShowMore}
      >
        Show {!isShowMore ? "more" : "less"}
      </button>
    </div>
  );
}
