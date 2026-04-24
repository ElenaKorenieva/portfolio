import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function EnergieAppPage() {
  return (
    <ProjectPageLayout
      label="Public project reference"
      title="EnergieApp"
      intro="During my internship at DTT, I contributed to a production Nuxt-based wellbeing application focused on workplace energy and vitality. My work centered on reusable UI components, animation-driven interactions, and building stable user-facing features within a real product environment."
      primaryButton={{
        href: "https://www.d-tt.nl/en/blog/welcome-energieapp",
        label: "View public DTT article",
        external: true,
      }}
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            EnergieApp is a workplace wellbeing platform where employees track
            their energy levels, gain insights into behavioral patterns, and
            receive actionable suggestions to improve performance. The
            application is built as a production Nuxt system with authentication,
            localization, state persistence, and API-driven workflows.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Developed and refined reusable UI components in a production Nuxt
              application
            </li>
            <li>
              Applied GSAP-based animations to improve interaction feedback and
              visual flow
            </li>
            <li>
              Contributed to user-facing product features, bug fixing, and UI
              improvements across multiple modules
            </li>
            <li>
              Worked with stateful frontend logic, API integration, and
              asynchronous data flows
            </li>
            <li>
              Collaborated within a real production codebase with structured
              workflows, code reviews, and ongoing feature development
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {[
              "Nuxt 4",
              "Vue 3",
              "TypeScript",
              "Pinia",
              "GSAP",
              "i18n",
              "VeeValidate",
              "Azure MSAL",
              "REST APIs",
              "Typed Router",
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
            The application combines modern Nuxt architecture with state
            management, persisted frontend data, localization, validation, and
            authentication flows, supporting production-grade frontend
            development and scalable UI patterns.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Improved UI consistency through reusable component patterns
            </li>
            <li>
              Enhanced user experience via animation-driven interaction feedback
            </li>
            <li>
              Increased product stability through bug fixing and iterative
              refinement
            </li>
            <li>
              Strengthened understanding of production frontend architecture in a
              modern Nuxt application
            </li>
            <li>
              Gained experience balancing feature delivery with maintenance in a
              real product environment
            </li>
          </ul>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Portfolio note">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            The original product UI and workflows are not displayed here.
            Visuals, internal logic, and client-specific elements are omitted to
            respect confidentiality. This page focuses on my technical
            contribution and publicly available project context.
          </p>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}