import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseDetailSectionsAnimationProps = {
  pageRef: RefObject<HTMLElement | null>;
  sectionSelector?: string;
};

export function useDetailSectionsAnimation({
  pageRef,
  sectionSelector = ".detail-section",
}: UseDetailSectionsAnimationProps) {
  useEffect(() => {
    if (!pageRef.current) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(sectionSelector);

      sections.forEach((section, index) => {
        const gradient =
          section.querySelector<HTMLElement>(".detail-section-gradient");

        gsap.fromTo(
          section,
          {
            y: 36,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        if (gradient) {
          gsap.set(gradient, {
            opacity: 0,
            scale: 1,
            backgroundPosition: "0% 50%",
          });
        }

        const enter = () => {
          gsap.to(section, {
            y: -6,
            duration: 0.28,
            ease: "power2.out",
            boxShadow: "0 18px 40px rgba(15,23,42,0.10)",
            overwrite: "auto",
          });

          if (gradient) {
            gsap.to(gradient, {
              opacity: 1,
              scale: 1.03,
              backgroundPosition: "100% 50%",
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };

        const leave = () => {
          gsap.to(section, {
            y: 0,
            duration: 0.28,
            ease: "power2.out",
            boxShadow: "0 1px 2px rgba(15,23,42,0.04)",
            overwrite: "auto",
          });

          if (gradient) {
            gsap.to(gradient, {
              opacity: 0,
              scale: 1,
              backgroundPosition: "0% 50%",
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };

        section.addEventListener("mouseenter", enter);
        section.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          section.removeEventListener("mouseenter", enter);
          section.removeEventListener("mouseleave", leave);
        });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [pageRef, sectionSelector]);
}