import { useEffect, useState } from "react";

export default function useScrollOffset() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollPosition;
}
