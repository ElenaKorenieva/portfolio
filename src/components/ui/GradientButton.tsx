import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export default function GradientButton({
  href,
  children,
  external,
}: GradientButtonProps) {
  const className =
    "gradient-btn group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900";

  const content = (
    <>
      <span className="gradient-layer absolute inset-0 opacity-0 z-0" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
}