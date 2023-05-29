import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "~/components/Logo";

export default function AppBar() {
  return (
    <div className="hidden w-full bg-white border-b md:block border-b-slate-200">
      <div className="gap-0 relative flex justify-between items-center py-4 overflow-hidden px-3.5 mx-auto lg:max-w-screen-2xl">
        <div className="lg:flex-grow flex-grow-0 flex-shrink lg:flex-shrink-0 basis-auto lg:basis-[140px]">
          <Logo />
        </div>

        {/* Filters and Search */}
        <div
          aria-label="filters-and-search"
          className="flex items-center p-2 ml-4 transition duration-300 border shadow-lg cursor-pointer select-none lg:ml-0 border-slate-200 rounded-3xl hover:shadow-xl"
          role="group"
        >
          <div className="px-4 truncate py-0.5 text-sm font-medium bg-white border-r rounded-l-lg border-r-slate-200 focus:z-10 focus:ring-2">
            Anywhere
          </div>
          <div className="px-4 truncate py-0.5 text-sm font-medium bg-white border-r border-r-slate-200 focus:z-10 focus:ring-2 ">
            Any week
          </div>
          <div className="px-4 truncate py-0.5 text-sm text-gray-400 bg-white rounded-r-lg focus:z-10 focus:ring-2">
            Add guests
          </div>

          <div className="rounded-full bg-[#ff385c] p-2">
            <MagnifyingGlassIcon className="w-4 h-4 font-semibold text-white" />
          </div>
        </div>

        {/* Airbnb your home and Change language */}
        <div className="flex items-center justify-end flex-grow flex-shrink-0 md:basis-[140px] w-full gap-2">
          <button
            aria-label="airbnb-your-home"
            className="px-4 py-2 text-sm font-medium hover:bg-slate-50 rounded-3xl"
          >
            Airbnb your home
          </button>

          <button aria-label="change-language">
            <GlobeAltIcon className="w-5 h-5 font-normal" />
          </button>

          {/* User account */}
          <button
            aria-label="user-account-context-menu"
            className="flex items-center gap-3 p-1.5 ml-4 border border-slate-300 cursor-pointer rounded-3xl hover:shadow-lg"
          >
            <Bars3Icon className="w-5 h-5 ml-1 font-medium" />

            <div className="relative overflow-hidden bg-gray-500 rounded-full w-7 h-7">
              <svg
                className="absolute text-white w-9 h-9 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
