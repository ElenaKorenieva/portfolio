import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHeaderIntroAnimation } from "../../hooks/useHeaderIntroAnimation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: "About", to: "/#about" },
    { label: "Projects", to: "/#projects" },
    { label: "Skills", to: "/#skills" },
    { label: "Contacts", to: "/#contacts" },
  ];

  useHeaderIntroAnimation({ headerRef, gradientRef });

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/20 will-change-transform"
    >
      <div
        ref={gradientRef}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-[length:200%_200%]"
      />

      <div className="absolute inset-0 -z-10 bg-white/40 backdrop-blur-md" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-wide text-gray-900">
          Olena&apos;s Portfolio
        </Link>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group relative text-gray-800"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-[2px] w-6 bg-gray-900" />
          <span className="h-[2px] w-6 bg-gray-900" />
          <span className="h-[2px] w-6 bg-gray-900" />
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-5 bg-white/60 px-6 py-4 backdrop-blur-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}