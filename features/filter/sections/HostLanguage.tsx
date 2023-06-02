import { ChangeEvent, useState } from "react";
import hostLanguagesData from "~/data/hostLanguages";

export default function HostLanguage() {
  const [isShowMore, setIsShowMore] = useState(false);

  const onSelectOption = (evt: ChangeEvent<HTMLInputElement>) => {
    // TODO: Redux action goes here.
    console.log(evt.target.value);
  };

  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="w-full py-8 space-y-6 border-t border-t-slate-200">
      <h2 className="text-2xl font-semibold">Host language</h2>

      <ul
        className={`grid w-full grid-cols-2 text-sm font-medium bg-white rounded-lg`}
      >
        {hostLanguagesData.map((item, index) => (
          <li
            key={item.value}
            className={`${
              index < 4 || isShowMore ? "block" : "hidden"
            } flex items-center w-full gap-4 py-3 group`}
          >
            <input
              id={item.value}
              key={item.value}
              value={item.value}
              type="checkbox"
              onChange={onSelectOption}
              className="w-6 h-6 text-black border-gray-400 rounded-md cursor-pointer focus:outline-none focus:ring-0 group-hover:border-gray-700"
            />
            <label
              htmlFor={item.value}
              className="w-full min-w-0 text-base font-light cursor-pointer"
            >
              {item.label}
            </label>
          </li>
        ))}
      </ul>

      <button
        className="pt-2 text-lg font-medium underline"
        onClick={toggleShowMore}
      >
        Show {!isShowMore ? "more" : "less"}
      </button>
    </div>
  );
}
