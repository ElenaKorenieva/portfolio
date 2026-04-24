import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function InnerSmilePage() {
  return (
    <ProjectPageLayout
      label="Public project reference"
      title="Inner Smile Company"
      intro="During my internship at DTT, I contributed to a production-grade wellbeing platform built as a multi-application monorepo. My work focused on developing user-facing features, animation-driven interactions, and reusable UI components within a shared architecture."
      primaryButton={{
        href: "https://www.d-tt.nl/en/blog/welcome-inner-smile-company",
        label: "View public DTT article",
        external: true,
      }}
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            Inner Smile Company is a workplace wellbeing platform designed to
            help employees track energy levels, gain behavioral insights, and
            improve performance. The system is structured as a multi-application
            ecosystem, including an employee app, coaching interface, and admin
            environment, all built within a shared monorepo architecture.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Developed user-facing features within a multi-application monorepo
              architecture (employee app, coach interface, admin CMS)
            </li>
            <li>
              Built an interactive breathing tool with GSAP-based animation,
              including custom eye open/close transitions and session flow logic
            </li>
            <li>
              Contributed to reusable UI components and shared frontend logic
              across multiple applications
            </li>
            <li>
              Worked within Nx monorepo setup with shared libraries, coordinated
              builds, and parallel app development
            </li>
            <li>
              Collaborated in a production environment with real deployment
              pipelines, code reviews, and evolving product requirements
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {[
              "Vue 3",
              "TypeScript",
              "Nx Monorepo",
              "Vite",
              "GSAP",
              "Vue Router",
              "i18n",
              "REST APIs",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            The platform was built as a scalable monorepo using Nx, supporting
            multiple frontend applications with shared libraries, centralized
            tooling, and consistent development workflows. This enabled efficient
            code reuse and coordination across different product areas.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Delivered animation-driven UI features that enhanced interaction
              quality and user engagement
            </li>
            <li>
              Contributed to a shared component system improving consistency
              across multiple applications
            </li>
            <li>
              Improved product stability through bug fixing and iterative UI
              refinement
            </li>
            <li>
              Gained hands-on experience working within a complex,
              multi-application production architecture
            </li>
            <li>
              Strengthened ability to operate in real-world development
              environments with multiple stakeholders and constraints
            </li>
          </ul>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Why this page is simplified">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            The original client implementation is not reproduced here. Visuals,
            internal workflows, and branded UI are intentionally omitted to
            respect confidentiality. This page focuses on architecture,
            technical contribution, and publicly available context.
          </p>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}