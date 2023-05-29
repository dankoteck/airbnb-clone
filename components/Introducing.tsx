export default function Introducing() {
  return (
    <div className="hidden w-full bg-gray-100 border-b md:block border-b-slate-200">
      <div className="relative flex items-center py-4 overflow-hidden px-3.5 mx-auto lg:max-w-screen-2xl">
        <p data-testid="introduce" className="text-base font-medium text-black md:text-xl">
          Introducing Airbnb Rooms and 50+ features
        </p>

        <div className="flex justify-end flex-1 text-sm text-gray-700">
          <button className="py-1.5 px-4 border-r border-r-slate-200">
            Watch the Rooms film
          </button>
          <button className="px-4">Learn more</button>
        </div>
      </div>
    </div>
  );
}
