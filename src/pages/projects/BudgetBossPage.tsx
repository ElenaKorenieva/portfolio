import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function BudgetBossPage() {
  return (
    <ProjectPageLayout
      label="Team project"
      title="Budget Boss"
      intro="A personal finance web application for tracking transactions, organizing financial data, and visualizing spending patterns. The project combined authentication, transaction history, and interactive reporting in a team development environment."
      primaryButton={{
        href: "https://elenakorenieva.github.io/budget-boss/",
        label: "View live demo",
        external: true,
      }}
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            Budget Boss was built as a collaborative web application focused on
            personal finance analysis. It included transaction management,
            category-based organization, user authentication, and chart-based
            reporting to help users better understand their financial activity.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Worked on the main page logic and frontend behavior for key user
              flows
            </li>
            <li>
              Styled and refined UI components to support a clear and consistent
              interface
            </li>
            <li>
              Contributed to data-driven views for transaction tracking and
              reporting
            </li>
            <li>
              Worked within a team environment using a shared React codebase
            </li>
            <li>
              Helped shape the user-facing experience for a finance-oriented
              product
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Redux Toolkit",
              "Axios",
              "Recharts",
              "Formik",
              "Yup",
              "Styled Components",
              "React Router",
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
            The project combined frontend state management, data fetching, form
            handling, and chart-based visualization in a structured React
            application.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Contributed to a clearer and more structured main user experience
            </li>
            <li>
              Strengthened practical skills in UI logic and component styling
            </li>
            <li>
              Worked with financial data presentation and interactive reporting
              patterns
            </li>
            <li>
              Gained experience building frontend features in a collaborative
              team setting
            </li>
            <li>
              Improved understanding of how interface decisions support usability
              in data-heavy products
            </li>
          </ul>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Project availability">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            This project is presented here as a portfolio case summary. The focus
            is on my contribution, technical stack, and product logic rather than
            live deployment.
          </p>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}