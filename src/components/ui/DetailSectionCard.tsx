import type { ReactNode } from "react";

type DetailSectionCardProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function DetailSectionCard({
  title,
  eyebrow,
  children,
  className = "",
}: DetailSectionCardProps) {
  return (
    <section
      className={`detail-section relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="detail-section-gradient pointer-events-none absolute inset-0 rounded-[inherit] opacity-0" />

      <div className="relative z-10">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            {eyebrow}
          </p>
        ) : null}

        {title ? (
          <h2 className={`${eyebrow ? "mt-3" : ""} text-xl font-bold text-slate-900`}>
            {title}
          </h2>
        ) : null}

        <div className={title || eyebrow ? "mt-4" : ""}>{children}</div>
      </div>
    </section>
  );
}