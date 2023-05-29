import AppBar from "~/components/AppBar";
import AppBarMobile from "~/components/AppBarMobile";
import ClientOnly from "~/components/ClientOnly";
import Introducing from "~/components/Introducing";
import ReduxProvider from "~/components/ReduxProvider";
import CategorySlider from "~/components/CategorySlider";
import Filter from "~/features/filter/Filter";

export default function Home() {
  return (
    <main>
      <Introducing />

      <AppBar />

      {/* Show when window sreen size is < 640px */}
      <AppBarMobile />

      <ClientOnly>
        <ReduxProvider>
          <div className="w-full">
            <div className="flex items-start justify-between py-4 gap-4 mx-auto lg:max-w-screen-2xl md:py-6 md:px-3.5 px-0">
              <CategorySlider />
              <Filter />
            </div>
          </div>
        </ReduxProvider>
      </ClientOnly>
    </main>
  );
}
