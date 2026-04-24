import { useRef } from "react";
import {
  ArrowUpRightIcon,
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
} from "../common/Icons";
import { useContactsAnimation } from "../../hooks/useContactsAnimation";
import { useContactIconHover } from "../../hooks/useContactIconAnimation";

const contactItems = [
  {
    label: "Email",
    value: "olena.korenieva@gmail.com",
    href: "mailto:olena.korenieva@gmail.com?subject=Contact%20from%20Portfolio",
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: "+31 6 81061511",
    href: "tel:+31681061511",
    Icon: PhoneIcon,
  },
  {
    label: "GitHub",
    value: "github.com/ElenaKorenieva",
    href: "https://github.com/ElenaKorenieva",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/olena-korenieva-555391109",
    href: "https://www.linkedin.com/in/olena-korenieva-555391109/",
    Icon: LinkedinIcon,
  },
] as const;

export default function ContactsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useContactsAnimation({ sectionRef });
  useContactIconHover({ sectionRef });

  return (
    <section
      id="contacts"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-5 py-20 pb-28 sm:px-6 sm:py-24 sm:pb-32 md:px-8"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          
          {/* LEFT */}
          <div className="contacts-intro max-w-2xl">
            <p className="contacts-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Contact
            </p>

            <h2 className="contacts-title mt-6 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl">
              Let’s build thoughtful,
              <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                well-crafted products
              </span>
            </h2>

            <p className="contacts-text mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I’m open to frontend opportunities where product thinking,
              maintainable architecture, and polished UI all matter.
            </p>

            <div className="contacts-meta mt-8 flex items-center gap-3 text-sm text-slate-500 sm:mt-10">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Based in Amsterdam, Netherlands
            </div>
          </div>

          {/* RIGHT */}
          <div className="contacts-panel relative flex min-w-0 flex-col">
            
            {/* vertical accent */}
            <div className="absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyan-200/70 to-transparent lg:block" />

            <div className="w-full min-w-0 divide-y divide-slate-200/80 rounded-[24px] border border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur-sm sm:rounded-[28px] sm:px-6">
              {contactItems.map(({ label, value, href, Icon }) => {
                const isExternal = href.startsWith("http");

                return (
                  <a
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`${label}: ${value}`}
                    className="contact-item group flex min-w-0 items-center justify-between gap-3 py-[18px] transition-all duration-300 sm:gap-6 sm:hover:translate-x-1"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                      
                      {/* ICON */}
                      <div className="contact-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700 sm:h-11 sm:w-11 sm:group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                          {label}
                        </p>

                        <p className="mt-1 max-w-[210px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-slate-800 transition-colors duration-300 group-hover:text-slate-950 sm:max-w-none sm:text-lg">
                          {value}
                        </p>
                      </div>
                    </div>

                    {/* ARROW (hidden on mobile) */}
                    <div className="contact-arrow hidden shrink-0 text-slate-400 transition-all duration-300 group-hover:text-slate-700 sm:block sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}