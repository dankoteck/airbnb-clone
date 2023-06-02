import { BsCheck } from "react-icons/bs";
import bookingOptionsData from "~/data/bookingOptions";

export default function BookingOptions() {
  return (
    <div className="w-full py-8 space-y-6 border-t border-t-slate-200">
      <h2 className="mb-6 text-2xl font-semibold">Booking options</h2>

      {bookingOptionsData.map((option) => (
        <div className="flex justify-between" key={option.label}>
          <div className="flex flex-col font-light">
            <span className="text-base">{option.label}</span>
            <span className="text-sm text-gray-500">{option.description}</span>
          </div>

          <label className="relative inline-flex items-center cursor-pointer group">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="-z-1 w-12 h-[34px] bg-gray-400 rounded-full peer peer-checked:after:translate-x-3 peer-checked:after:border peer-checked:after:border-black after:-z-1 after:content-[''] duration-300 after:absolute after:border after:top-[50%] after:-translate-y-[50%] after:border-gray-400 after:left-0.5 after:bg-white after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-black group-hover:bg-gray-500" />
            <BsCheck className="absolute w-5 h-5 font-bold text-black transition duration-300 translate-x-5 opacity-0 peer-checked:opacity-100" />
          </label>
        </div>
      ))}
    </div>
  );
}
