import { ChangeEvent, useState } from "react";
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";

export default function Switch({
  value = false,
  onChange,
}: {
  value?: boolean;
  onChange?: (value: boolean) => void;
}) {
  const [checked, setChecked] = useState(value);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setChecked(evt.target.checked);
    onChange?.(evt.target.checked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer group">
      <input
        role="switch"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only peer"
      />
      <div className="-z-1 w-12 h-[34px] bg-gray-400 rounded-full peer peer-checked:after:translate-x-3 peer-checked:after:border peer-checked:after:border-black after:-z-1 after:content-[''] duration-300 after:absolute after:border after:top-[50%] after:-translate-y-[50%] after:border-gray-400 after:left-0.5 after:bg-white after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-black group-hover:bg-gray-500" />
      <BsCheck className="absolute w-5 h-5 font-bold text-black transition duration-300 translate-x-5 opacity-0 peer-checked:opacity-100" />
    </label>
  );
}
