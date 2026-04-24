import { useRef } from "react";
import { projects } from "../../data/projectsData";
import { useProjectsAnimation } from "../../hooks/useProjectsAnimation";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useProjectsAnimation(sectionRef);

  const featuredProjects = projects.filter((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 md:px-8 lg:px-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] sm:bg-[size:40px_40px] md:bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="projects-eyebrow inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Selected Work
          </div>

          <h2 className="projects-title mt-6 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl">
            Projects that combine
            <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              UI and product thinking
            </span>
          </h2>

          <p className="projects-text mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            A selection of projects ranging from production applications to focused
            frontend builds. Each case highlights not just visuals, but how interfaces,
            state, and data come together in real-world scenarios.
          </p>
        </div>

        <div className="projects-grid mt-14 space-y-6">
          <div className="projects-row-featured grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="projects-row-standard grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {standardProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}