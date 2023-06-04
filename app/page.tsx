import AppBar from "~/components/AppBar";
import AppBarMobile from "~/components/AppBarMobile";
import ClientOnly from "~/components/ClientOnly";
import Introducing from "~/components/Introducing";
import ReduxProvider from "~/components/ReduxProvider";

import Header from "./Header";
import Content from "./Content";

export default function Home() {
  return (
    <main>
      {/* <Introducing /> */}

      <AppBar />

      <ClientOnly>
        <ReduxProvider>
          {/* Show when window sreen size is < 640px */}
          <AppBarMobile />

          <div className="w-full px-8 sm:px-0">
            <Header />
            <Content />
          </div>
        </ReduxProvider>
      </ClientOnly>
    </main>
  );
}
