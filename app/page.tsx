import AppBar from "~/components/AppBar";
import AppBarMobile from "~/components/AppBarMobile";
import ClientOnly from "~/components/ClientOnly";
import Introducing from "~/components/Introducing";
import ReduxProvider from "~/components/ReduxProvider";

import ListPlaces from "~/features/ListPlaces";
import Header from "./Header";

export default function Home() {
  return (
    <main>
      {/* <Introducing /> */}

      <AppBar />

      {/* Show when window sreen size is < 640px */}
      <AppBarMobile />

      <ClientOnly>
        <ReduxProvider>
          <div className="w-full">
            <Header />

            {/* 83px for Appbar, 81px for CategorySlider */}
            <div className="py-4 mx-auto mt-[calc(83px+82px)] lg:max-w-screen-2xl md:py-6 md:px-3.5 px-0">
              <ListPlaces />
            </div>
          </div>
        </ReduxProvider>
      </ClientOnly>
    </main>
  );
}
