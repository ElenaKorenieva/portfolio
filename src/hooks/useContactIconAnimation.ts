import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

type UseContactIconHoverProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export function useContactIconHover({ sectionRef }: UseContactIconHoverProps) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const icons = section.querySelectorAll<HTMLElement>(".contact-icon");

    const cleanupFns: (() => void)[] = [];

    icons.forEach((icon) => {
      const onEnter = () => {
        gsap.killTweensOf(icon);

        gsap.timeline()
          .to(icon, {
            y: -10,
            scale: 1.1,
            duration: 0.18,
            ease: "power2.out",
          })
          .to(icon, {
            y: 0,
            scale: 1,
            duration: 0.22,
            ease: "bounce.out",
          });
      };

      const onLeave = () => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      icon.addEventListener("mouseenter", onEnter);
      icon.addEventListener("mouseleave", onLeave);

      cleanupFns.push(() => {
        icon.removeEventListener("mouseenter", onEnter);
        icon.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [sectionRef]);
}