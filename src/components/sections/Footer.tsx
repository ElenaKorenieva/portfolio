import { useRef } from "react";
import { useFooterIntroAnimation } from "../../hooks/useFooterIntroAnimation";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useFooterIntroAnimation({ footerRef, gradientRef });

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-white/20 will-change-transform"
    >
      {/* Gradient layer */}
      <div
        ref={gradientRef}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-[length:200%_200%]"
      />

      {/* Glass blur layer */}
      <div className="absolute inset-0 -z-10 bg-white/40 backdrop-blur-md" />

      {/* Your original content */}
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between text-xs text-black/80">
          <span>© {new Date().getFullYear()} Olena Korenieva</span>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="transition-colors duration-300 hover:text-black"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}