import AppBar from "~/components/AppBar";
import AppBarMobile from "~/components/AppBarMobile";
import Introducing from "~/components/Introducing";

export default function Home() {
  return (
    <main>
      <Introducing />
      <AppBar />

      {/* Show when window sreen size is < 640px */}
      <AppBarMobile />
    </main>
  );
}
