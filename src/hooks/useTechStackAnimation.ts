import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseTechStackAnimationProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export function useTechStackAnimation({
  sectionRef,
}: UseTechStackAnimationProps) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const eyebrow = section.querySelector<HTMLElement>(".tech-stack-eyebrow");
      const title = section.querySelector<HTMLElement>(".tech-stack-title");
      const text = section.querySelector<HTMLElement>(".tech-stack-text");
      const panel = section.querySelector<HTMLElement>(".tech-stack-panel");
      const groups = section.querySelectorAll<HTMLElement>(".tech-stack-group");
      const chips = section.querySelectorAll<HTMLElement>(".tech-chip");

      if (!eyebrow || !title || !text || !panel || chips.length === 0) return;

      gsap.set([eyebrow, title, text], {
        autoAlpha: 0,
        y: 24,
        filter: "blur(8px)",
      });

      gsap.set(groups, {
        autoAlpha: 0,
        y: 24,
        filter: "blur(8px)",
      });

      gsap.set(chips, {
        autoAlpha: 0,
        y: 16,
        filter: "blur(6px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(eyebrow, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power3.out",
      })
        .to(
          title,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.15"
        )
        .to(
          text,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          groups,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.2"
        )
        .to(
          chips,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.04,
          },
          "-=0.45"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}