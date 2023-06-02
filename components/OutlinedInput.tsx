import { ReactElement, ReactNode, useState } from "react";

type Props = {
  id: string;
  label: string;
  className?: string | undefined;
  inputClassName?: string | undefined;
  prefix?: null | string | ReactElement | ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function OutlinedInput({
  id,
  label,
  className,
  inputClassName,
  prefix,
  ...rest
}: Props) {
  const [inputFocused, setInputFocused] = useState(false);

  const classNames = `flex flex-col px-4 py-2 border transition duration-300 border-gray-400 rounded-lg ${className} ${
    inputFocused ? "border-gray-900" : ""
  }`;
  const inputClassNames = `block w-full font-light bg-transparent !appearance-none focus:outline-none focus:ring-0 ${inputClassName}`;

  return (
    <div className={classNames}>
      <label htmlFor={id} className="text-xs text-zinc-400">
        {label}
      </label>

      <div className="flex gap-1">
        {prefix !== null && (
          <span className="text-lg font-light text-black">{prefix}</span>
        )}

        <input
          {...rest}
          id={id}
          aria-label={label}
          className={inputClassNames}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div>
    </div>
  );
}
