import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import useScrollOffset from "~/hooks/useScrollOffset";

export default function AppBarMobile() {
  // const scrollPosition = useScrollOffset();

  return (
    <div
      className={`fixed top-0 z-20 bg-white left-0 w-full max-w-3xl p-4 mx-auto md:hidden`}
    >
      <div className="flex items-center justify-between w-full p-2 bg-white border rounded-full shadow-md border-slate-100 md:hidden">
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
