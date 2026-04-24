import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (!element) return;

      const headerOffset = 96;
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetTop = elementTop - headerOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    };

    requestAnimationFrame(scrollToElement);
  }, [location]);

  return null;
}