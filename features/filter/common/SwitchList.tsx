import Link from "next/link";
import Switch from "~/components/Switch";

type Props = {
  title: string;
  data: {
    label: string;
    description: string;
    moreInfoLink?: {
      label: string;
      href: string;
    };
  }[];
};

export default function SwitchList({ title, data }: Props) {
  return (
    <div className="w-full py-8 space-y-6 border-t border-t-slate-200">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {data.map((option) => (
        <div
          aria-label="List option"
          className="flex justify-between"
          key={option.label}
        >
          <div aria-label="Option details" className="flex flex-col font-light">
            <span className="text-base">{option.label}</span>
            <span className="text-sm text-gray-500">{option.description}</span>
            {option.moreInfoLink && (
              <Link
                target="_blank"
                href={option.moreInfoLink.href}
                className="mt-1 text-sm font-medium underline"
              >
                {option.moreInfoLink.label}
              </Link>
            )}
          </div>

          <Switch />
        </div>
      ))}
    </div>
  );
}
