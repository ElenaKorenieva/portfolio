import type { Project } from "../../data/projectsData";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.href.startsWith("http");

  const topLabel =
    project.label ||
    (project.kind === "public-reference"
      ? "Public project reference"
      : project.kind === "rebuild-demo"
      ? "Independent demo"
      : "Personal project");

  const previewTitle =
    project.visualType === "video-placeholder"
      ? "Video showcase"
      : project.kind === "public-reference"
      ? "Technical contribution"
      : project.kind === "rebuild-demo"
      ? "Rebuilt from scratch"
      : "Project preview";

  const previewText =
    project.note ||
    (project.kind === "public-reference"
      ? "Presented without client UI or internal workflows"
      : project.kind === "rebuild-demo"
      ? "Original commercial visuals replaced with an independent concept"
      : "Preview adapted for portfolio presentation");

  const icon =
    project.visualType === "video-placeholder" ? "▶" : "→";

  return (
    <a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`project-card group relative block overflow-hidden rounded-[28px] border border-white/70 bg-white/65 backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-transform ${
        project.featured
          ? "project-card-featured min-h-[420px]"
          : "project-card-standard min-h-[320px]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-cyan-100/30 opacity-80" />

      <div
        className={`relative overflow-hidden ${
          project.featured ? "h-56" : "h-44"
        }`}
      >
        <div className="project-media absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.92),_rgba(30,41,59,0.82))]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-50" />

        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              {topLabel}
            </span>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>

          <div className="max-w-[78%] rounded-2xl border border-white/15 bg-white/10 p-3 text-white/90 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.16em] text-cyan-200">
              {previewTitle}
            </div>
            <div className="mt-1 text-sm text-white/80">
              {previewText}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-5">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item: string) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-slate-900">
            {project.cta}
          </span>
          <span className="text-lg text-cyan-600 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}