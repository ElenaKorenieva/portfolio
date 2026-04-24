import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function TaskProPage() {
  return (
    <ProjectPageLayout
      label="Team project"
      title="TaskPro – Activity Management App"
      intro="A team-developed web application for planning and tracking user activities, focusing on structured UI, persistent state management, and form-driven workflows."
      primaryButton={{
        href: "https://elenakorenieva.github.io/taskpro/",
        label: "View live demo",
        external: true,
      }}
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            TaskPro was developed in a collaborative environment, simulating
            real-world frontend development workflows with shared codebase,
            reusable components, and state-driven UI architecture.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Contributed to frontend implementation using React and Redux
              Toolkit
            </li>
            <li>
              Worked with global state management and persistent data (Redux
              Persist)
            </li>
            <li>
              Implemented form handling and validation using Formik and Yup
            </li>
            <li>
              Built and refined UI components using Material UI
            </li>
            <li>
              Collaborated within a team using shared architecture and Git
              workflows
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Redux Toolkit",
              "React Router",
              "Axios",
              "Formik",
              "Yup",
              "Material UI",
              "Redux Persist",
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
            The application demonstrates structured frontend architecture,
            state management, and user input handling in a collaborative
            development environment.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Built experience working in a collaborative frontend development
              environment
            </li>
            <li>
              Applied state management patterns using Redux Toolkit
            </li>
            <li>
              Implemented scalable form handling and validation logic
            </li>
            <li>Contributed to reusable UI component structure</li>
            <li>
              Strengthened understanding of real-world team workflows and code
              integration
            </li>
          </ul>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}