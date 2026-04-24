import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseContactsAnimationProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export function useContactsAnimation({
  sectionRef,
}: UseContactsAnimationProps) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const intro = section.querySelector<HTMLElement>(".contacts-intro");
      const eyebrow = section.querySelector<HTMLElement>(".contacts-eyebrow");
      const title = section.querySelector<HTMLElement>(".contacts-title");
      const text = section.querySelector<HTMLElement>(".contacts-text");
      const meta = section.querySelector<HTMLElement>(".contacts-meta");

      const panel = section.querySelector<HTMLElement>(".contacts-panel");
      const items = section.querySelectorAll<HTMLElement>(".contact-item");
      const icons = section.querySelectorAll<HTMLElement>(".contact-icon");
      const arrows = section.querySelectorAll<HTMLElement>(".contact-arrow");

      if (!intro || !panel || items.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.set([eyebrow, title, text, meta], {
        autoAlpha: 0,
        y: 24,
        filter: "blur(8px)",
      });

      gsap.set(items, {
        autoAlpha: 0,
        y: 28,
        filter: "blur(8px)",
      });

      gsap.set(icons, {
        autoAlpha: 0,
        scale: 0.8,
        y: 10,
      });

      gsap.set(arrows, {
        autoAlpha: 0,
        x: -8,
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
          meta,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          items,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.15"
        )
        .to(
          icons,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.45,
            ease: "back.out(1.6)",
            stagger: 0.08,
          },
          "-=0.55"
        )
        .to(
          arrows,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.35,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.45"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}