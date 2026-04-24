import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

type UseHeaderIntroAnimationArgs = {
  headerRef: RefObject<HTMLElement | null>;
  gradientRef: RefObject<HTMLDivElement | null>;
};

export function useHeaderIntroAnimation({
  headerRef,
  gradientRef,
}: UseHeaderIntroAnimationArgs) {
  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, {
        yPercent: -100,
        autoAlpha: 0,
        filter: "blur(8px)",
      });

      gsap.to(headerRef.current, {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1.05,
        delay: 0.12,
        ease: "power3.out",
        clearProps: "filter",
      });

      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          backgroundPosition: "200% 50%",
          duration: 12,
          ease: "none",
          repeat: -1,
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, [headerRef, gradientRef]);
}