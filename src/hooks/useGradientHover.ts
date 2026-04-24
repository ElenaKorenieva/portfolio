import { useEffect } from "react";
import { gsap } from "gsap";

export function useGradientHover(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const cleanups: (() => void)[] = [];

    elements.forEach((el) => {
      const gradient = el.querySelector(".gradient-layer");

      if (!gradient) return;

      const enter = () => {
        gsap.killTweensOf(gradient);

        gsap.to(gradient, {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.fromTo(
          gradient,
          { x: "-20%" },
          {
            x: "20%",
            duration: 1.2,
            ease: "power1.inOut",
          }
        );

        gsap.to(el, {
          y: -2,
          scale: 1.02,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf(gradient);

        gsap.to(gradient, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        });

        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [selector]);
}