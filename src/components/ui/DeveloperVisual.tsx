import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function DeveloperVisual() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current!.querySelectorAll(".dev-float");

      gsap.to(items, {
        y: () => gsap.utils.random(-12, 12),
        x: () => gsap.utils.random(-10, 10),
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      {/* laptop */}
      <div className="dev-float absolute h-[180px] w-[280px] rounded-xl border border-cyan-200/40 bg-white/30 backdrop-blur-sm shadow-[0_0_40px_rgba(6,182,212,0.15)]" />

      {/* screen glow */}
      <div className="dev-float absolute h-[140px] w-[240px] rounded-lg bg-gradient-to-br from-cyan-300/20 to-blue-400/20 blur-xl" />

      {/* floating code blocks */}
      <div className="dev-float absolute left-[20%] top-[30%] text-xs text-cyan-600 opacity-60">
        {"{ }"}
      </div>

      <div className="dev-float absolute right-[22%] top-[28%] text-xs text-blue-600 opacity-60">
        {"</>"}
      </div>

      <div className="dev-float absolute bottom-[28%] left-[30%] text-xs text-indigo-500 opacity-60">
        {"const"}
      </div>

      <div className="dev-float absolute bottom-[25%] right-[30%] text-xs text-cyan-500 opacity-60">
        {"useState()"}
      </div>
    </div>
  );
}