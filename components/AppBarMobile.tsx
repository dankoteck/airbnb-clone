import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function AppBarMobile() {
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <div className="flex items-center justify-between w-full p-2 bg-white border rounded-full shadow-lg border-slate-100 md:hidden">
        <div className="flex items-center gap-2">
          <MagnifyingGlassIcon
            data-testid="magnifying-glass-icon"
            className="w-5 h-5 mx-2"
          />

          <div className="">
            <p className="text-sm font-medium">Anywhere</p>
            <p className="text-xs font-light text-gray-400">
              Any week &nbsp;&bull;&nbsp; Add guests
            </p>
          </div>
        </div>

        <button
          aria-label="Filter"
          className="p-1.5 border rounded-full border-slate-200"
        >
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
