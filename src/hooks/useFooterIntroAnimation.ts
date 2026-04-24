import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseFooterIntroAnimationArgs = {
  footerRef: RefObject<HTMLElement | null>;
  gradientRef: RefObject<HTMLDivElement | null>;
};

export function useFooterIntroAnimation({
  footerRef,
  gradientRef,
}: UseFooterIntroAnimationArgs) {
  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const footer = footerRef.current;
      const gradient = gradientRef.current;

      if (!footer) return;

      gsap.set(footer, {
        y: 32,
        autoAlpha: 0,
        filter: "blur(8px)",
      });

      gsap.to(footer, {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1.05,
        ease: "power3.out",
        clearProps: "filter",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          once: true,
        },
      });

      if (gradient) {
        gsap.to(gradient, {
          backgroundPosition: "200% 50%",
          duration: 12,
          ease: "none",
          repeat: -1,
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, [footerRef, gradientRef]);
}