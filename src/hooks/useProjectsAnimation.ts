import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useProjectsAnimation(
  sectionRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const featuredCards = gsap.utils.toArray<HTMLElement>(
        ".projects-row-featured .project-card"
      );
      const standardCards = gsap.utils.toArray<HTMLElement>(
        ".projects-row-standard .project-card"
      );
      const allCards = [...featuredCards, ...standardCards];
      const allMedia = gsap.utils.toArray<HTMLElement>(".project-media");

      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      gsap.fromTo(
        ".projects-eyebrow",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".projects-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 76%",
          },
        }
      );

      gsap.fromTo(
        ".projects-text",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
          },
        }
      );

      if (isMobile) {
        allCards.forEach((card) => {
          gsap.fromTo(
            card,
            { x: -80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      } else {
        const featuredLeft = featuredCards.filter((_, index) => index % 2 === 0);
        const featuredRight = featuredCards.filter((_, index) => index % 2 === 1);

        gsap.fromTo(
          featuredLeft,
          { x: -120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".projects-row-featured",
              start: "top 84%",
            },
          }
        );

        gsap.fromTo(
          featuredRight,
          { x: 120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".projects-row-featured",
              start: "top 84%",
            },
          }
        );

        const standardLeft = standardCards.filter((_, index) => index % 2 === 0);
        const standardRight = standardCards.filter((_, index) => index % 2 === 1);

        gsap.fromTo(
          standardLeft,
          { x: -120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".projects-row-standard",
              start: "top 88%",
            },
          }
        );

        gsap.fromTo(
          standardRight,
          { x: 120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".projects-row-standard",
              start: "top 88%",
            },
          }
        );
      }

      allCards.forEach((card, index) => {
        const mediaEl = allMedia[index];

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.28,
            ease: "power2.out",
          });

          if (mediaEl) {
            gsap.to(mediaEl, {
              scale: 1.06,
              duration: 0.45,
              ease: "power2.out",
            });
          }
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.28,
            ease: "power2.out",
          });

          if (mediaEl) {
            gsap.to(mediaEl, {
              scale: 1,
              duration: 0.45,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [sectionRef]);
}