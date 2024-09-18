import { useEffect } from "react";

export const useScrollVisibility = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        element?.classList.add("show-scroll");
      } else {
        element?.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
