import { useRef, type ReactNode } from "react";
import GradientButton from "../components/ui/GradientButton";
import { useGradientHover } from "../hooks/useGradientHover";
import { useDetailSectionsAnimation } from "../hooks/useDetailSectionsAnimation";

type ProjectPageLayoutProps = {
  label: string;
  title: string;
  intro: string;
  children: ReactNode;
  primaryButton?: {
    href: string;
    label: string;
    external?: boolean;
  };
};

export default function ProjectPageLayout({
  label,
  title,
  intro,
  children,
  primaryButton,
}: ProjectPageLayoutProps) {
  const pageRef = useRef<HTMLElement | null>(null);

  useGradientHover(".gradient-btn");
  useDetailSectionsAnimation({ pageRef });

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#f8fbff] px-4 py-24 sm:px-6 md:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          {label}
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {intro}
        </p>

        {children}

        <div className="mt-10 flex flex-wrap gap-4">
          {primaryButton ? (
            <GradientButton
              href={primaryButton.href}
              external={primaryButton.external}
            >
              {primaryButton.label}
            </GradientButton>
          ) : null}

          <GradientButton href="/#projects">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to projects
          </GradientButton>
        </div>
      </div>
    </main>
  );
}