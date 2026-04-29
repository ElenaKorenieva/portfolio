import { useRef } from "react";
import { useHeroIntroAnimation } from "../../hooks/useHeroIntroAnimation";
import { useTechCursorTrail } from "../../hooks/useTechCursorTrail";
import HeroCard from "../../components/ui/HeroCard";
import MagneticParticles from "../ui/MagneticParticles";
import DeveloperVisual from "../ui/DeveloperVisual";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const blob1Ref = useRef<HTMLDivElement | null>(null);
  const blob2Ref = useRef<HTMLDivElement | null>(null);
  const blob3Ref = useRef<HTMLDivElement | null>(null);
  const trailContainerRef = useRef<HTMLDivElement | null>(null);

  useHeroIntroAnimation({
    sectionRef,
    badgeRef,
    titleRef,
    textRef,
    blob1Ref,
    blob2Ref,
    blob3Ref,
  });

  useTechCursorTrail(trailContainerRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#f8fbff] px-4 pt-28 sm:px-6 md:px-8 lg:px-6"
    >
      <div
        ref={trailContainerRef}
        className="pointer-events-none fixed inset-0 z-[60] hidden overflow-hidden md:block"
        aria-hidden="true"
      />

      <div
        ref={blob1Ref}
        className="absolute left-[-10%] top-[12%] h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl sm:left-[2%] sm:top-[16%] sm:h-56 sm:w-56 md:left-[8%] md:top-[18%] md:h-64 md:w-64"
      />

      <div
        ref={blob2Ref}
        className="absolute right-[-12%] top-[8%] h-44 w-44 rounded-full bg-blue-200/50 blur-3xl sm:right-[0%] sm:top-[10%] sm:h-60 sm:w-60 md:right-[10%] md:top-[12%] md:h-72 md:w-72"
      />

      <div
        ref={blob3Ref}
        className="absolute bottom-[6%] left-[18%] h-52 w-52 rounded-full bg-indigo-200/40 blur-3xl sm:left-[28%] sm:h-64 sm:w-64 md:bottom-[10%] md:left-[35%] md:h-80 md:w-80"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] sm:bg-[size:40px_40px] md:bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl">
          <div
            ref={badgeRef}
            className="mb-5 inline-flex items-center rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur sm:text-sm"
          >
            Based in the Netherlands · Building modern web experiences
          </div>

          <h1
            ref={titleRef}
            className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Fullstack
            <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p
            ref={textRef}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8 md:mt-8 md:text-xl"
          >
            I create responsive, interactive products with a strong frontend eye
            and a practical fullstack mindset: combining clean UI and modern
            JavaScript tools to build robust user interfaces.
          </p>
        </div>

        <div className="hero-card-wrap relative hidden min-h-[520px] items-center justify-center md:flex">
          <div className="absolute inset-0 z-0">
            <DeveloperVisual />
          </div>

          <div className="absolute inset-0 z-10">
            <MagneticParticles />
          </div>

          <div className="relative z-20">
            <HeroCard />
          </div>
        </div>

        <div className="hero-card-wrap relative min-h-[420px] md:hidden">
          <div className="absolute inset-0 z-0">
            <DeveloperVisual />
          </div>

          <div className="absolute inset-0 z-10">
            <MagneticParticles />
          </div>

          <div className="relative z-20">
            <HeroCard mobile />
          </div>
        </div>
      </div>
    </section>
  );
}