import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

type HeroIntroAnimationArgs = {
  sectionRef: RefObject<HTMLElement | null>;
  badgeRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  textRef: RefObject<HTMLParagraphElement | null>;
  blob1Ref: RefObject<HTMLDivElement | null>;
  blob2Ref: RefObject<HTMLDivElement | null>;
  blob3Ref: RefObject<HTMLDivElement | null>;
};

export function useHeroIntroAnimation({
  sectionRef,
  badgeRef,
  titleRef,
  textRef,
  blob1Ref,
  blob2Ref,
  blob3Ref,
}: HeroIntroAnimationArgs) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const badge = badgeRef.current;
      const title = titleRef.current;
      const text = textRef.current;
      const cards = section.querySelectorAll<HTMLElement>(".hero-card-wrap");

      const blobs = [
        blob1Ref.current,
        blob2Ref.current,
        blob3Ref.current,
      ].filter(Boolean);

      gsap.set([badge, title, text], {
        autoAlpha: 0,
        y: 24,
        filter: "blur(8px)",
      });

      gsap.set(cards, {
        autoAlpha: 0,
        y: 28,
        scale: 0.96,
        filter: "blur(8px)",
      });

      gsap.set(blobs, {
        autoAlpha: 0,
        scale: 0.8,
        y: 10,
      });

      const tl = gsap.timeline();

      tl.to(blobs, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "back.out(1.6)",
        stagger: 0.08,
      })
        .to(
          badge,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.2"
        )
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
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

      gsap.to(blob1Ref.current, {
        x: 40,
        y: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        x: -30,
        y: 30,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob3Ref.current, {
        x: 20,
        y: 25,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, badgeRef, titleRef, textRef, blob1Ref, blob2Ref, blob3Ref]);
}