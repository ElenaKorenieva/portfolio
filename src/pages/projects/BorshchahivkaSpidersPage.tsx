import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function BorshchahivkaSpidersPage() {
  return (
    <ProjectPageLayout
      label="Volunteer project"
      title="Borshchahivka Spiders"
      intro="A volunteer initiative website developed to support camouflage net production for the Armed Forces of Ukraine. The project was built as a fullstack application, where I contributed on the frontend by implementing user-facing features and integrating them with backend services."
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            Borshchahivka Spiders was a volunteer initiative website created to
            support the organization and visibility of camouflage net
            production. The platform provided structured information and enabled
            contributors to submit requests through a user-friendly interface.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Contributed to frontend implementation in a fullstack team project
              (Node.js, Express, MongoDB backend)
            </li>
            <li>
              Developed a form for ordering camouflage nets with validation
              using Yup
            </li>
            <li>
              Integrated the form with backend API endpoints for data submission
            </li>
            <li>
              Built responsive UI structure for clear content presentation
            </li>
            <li>
              Worked with Material UI to create a consistent and accessible
              interface
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "Material UI",
              "Yup",
              "Node.js",
              "Express",
              "MongoDB",
            ].map((item: string) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            The project combined frontend UI development with backend API
            integration, focusing on real-world data submission and user
            interaction flows.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Delivered a functional user flow for submitting real-world
              requests via a validated form
            </li>
            <li>Integrated frontend logic with backend API endpoints</li>
            <li>Applied form validation patterns using Yup</li>
            <li>
              Contributed to a fullstack application while focusing on frontend
              ownership
            </li>
            <li>Worked on a purpose-driven product with real-world impact</li>
          </ul>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Project availability">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            The original website is no longer publicly available. This page
            presents a portfolio summary of the project and my contribution.
          </p>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}