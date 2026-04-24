import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function CocktailsProjectPage() {
  return (
    <ProjectPageLayout
      label="Frontend project"
      title="Cocktails Project"
      intro="A frontend web application for exploring cocktail recipes, saving favorites, and navigating results efficiently through custom pagination and client-side persistence."
      primaryButton={{
        href: "https://elenakorenieva.github.io/cocktailsProject/",
        label: "View live demo",
        external: true,
      }}
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            The project was designed as a recipe discovery experience for users
            who want to browse cocktails, save favorite items, and return to
            them later without losing their selections.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Reworked the application logic to support more efficient frontend
              behavior
            </li>
            <li>
              Implemented dynamic saving of favorite cocktails and ingredients
              using local storage
            </li>
            <li>Built custom pagination on the frontend side</li>
            <li>
              Reduced the number of unnecessary API requests through improved
              client-side logic
            </li>
            <li>
              Worked on a more responsive and user-friendly browsing experience
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Axios", "Parcel", "SCSS", "Local Storage"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            The project focused on frontend logic, API integration, build
            tooling with Parcel, and browser-side data persistence.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Improved browsing performance by reducing unnecessary requests to
              the external API
            </li>
            <li>
              Added persistent user experience through local storage-based
              favorites
            </li>
            <li>
              Built custom pagination logic instead of relying on a ready-made
              solution
            </li>
            <li>Strengthened frontend architecture and state-handling skills</li>
            <li>Increased ownership by rewriting core application logic</li>
          </ul>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Project availability">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            This project is publicly available as a live demo. The portfolio
            page highlights the key technical decisions and my contribution to
            the frontend logic.
          </p>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}