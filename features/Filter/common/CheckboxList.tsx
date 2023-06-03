import { ChangeEvent, useState } from "react";

type Props = {
  title: string;
  data: {
    groupBy: string;
    label: string;
    items: {
      label: string;
      value: string;
    }[];
  }[];
};

export default function CheckboxList({ title, data }: Props) {
  const [isShowMore, setIsShowMore] = useState(false);

  const onSelectOption = (evt: ChangeEvent<HTMLInputElement>) => {
    // TODO: Redux action goes here.
    console.log(evt.target.value);
  };

  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div role="menu" className="w-full py-8 border-t border-t-slate-200">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {data.map((group, index) => (
        <ul
          role="group"
          aria-label={group.label}
          key={group.groupBy}
          // Hidden all except the first group by default
          className={`${index === 0 || isShowMore ? "block" : "hidden"} ${
            group.label === "" ? "mt-6" : ""
          } grid w-full grid-cols-2 text-sm font-medium bg-white rounded-lg`}
        >
          {/* If label is empty that's mean no grouped, then don't need to render title */}
          {group.label !== "" && (
            <>
              <li className="mt-6 mb-2.5 text-lg font-medium">{group.label}</li>
              <li />
            </>
          )}
          {group.items.map((item, itemIndex) => (
            <li
              role="menuitem"
              key={`${group.groupBy}-${item.value}`}
              className={`${
                // Hidden all except the first 4 items by default
                itemIndex < 4 || isShowMore ? "block" : "hidden"
              } flex items-center w-full gap-4 py-3 group`}
            >
              <input
                id={`${group.groupBy}-${item.value}`}
                type="checkbox"
                role="checkbox"
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
