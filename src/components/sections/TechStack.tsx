import { useRef } from "react";
import { useTechStackAnimation } from "../../hooks/useTechStackAnimation";

const techGroups = [
  {
    title: "Frontend",
    items: ["React", "Vue 3", "Nuxt 4", "TypeScript", "JavaScript"],
  },
  {
    title: "State & Forms",
    items: ["Pinia", "Redux Toolkit", "Formik", "Yup", "VeeValidate"],
  },
  {
    title: "UI & Interaction",
    items: ["Tailwind CSS", "GSAP", "Material UI", "Floating UI"],
  },
  {
    title: "Architecture & Tooling",
    items: ["Nx", "Vite", "PNPM", "Git", "Typed Router"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "MongoDB", "Django", "DRF", "REST APIs"],
  },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useTechStackAnimation({ sectionRef });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative isolate bg-[#f8fbff] px-4 py-24 sm:px-6 md:px-8"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl">
          <p className="tech-stack-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Tech stack
          </p>

          <h2 className="tech-stack-title mt-6 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl">
            Tools I use to build
            <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              scalable web products
            </span>
          </h2>

          <p className="tech-stack-text mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            A practical stack shaped by production work, frontend architecture,
            and building user-facing systems that are maintainable, responsive,
            and real-world ready.
          </p>
        </div>

        <div className="tech-stack-panel space-y-8">
          {techGroups.map((group) => (
            <div key={group.title} className="tech-stack-group">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tech-chip rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}