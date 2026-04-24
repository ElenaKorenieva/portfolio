import DetailSectionCard from "../../components/ui/DetailSectionCard";
import ProjectPageLayout from "../../layouts/ProjectPageLayout";

export default function LocationFinderPage() {
  return (
    <ProjectPageLayout
      label="Fullstack project"
      title="Location Finder Platform"
      intro="A fullstack platform designed to help users find essential nearby services such as restaurants, medical centers, and support locations. The application combines location-based search, multilingual support, and backend-driven workflows."
    >
      <div className="mt-10">
        <DetailSectionCard eyebrow="Project context">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            The project was designed to help users navigate unfamiliar
            environments by providing accessible information about essential
            services. It focused on usability, localization, and integration
            with external APIs for real-time data.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailSectionCard title="My contribution">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Built fullstack functionality using Django REST Framework and
              React
            </li>
            <li>
              Integrated Google Places API for location-based search and data
              retrieval
            </li>
            <li>
              Implemented multilingual support (i18n) for accessibility across
              users
            </li>
            <li>
              Designed API endpoints and structured backend logic using DRF
            </li>
            <li>
              Used Django signals to handle messaging and backend event
              workflows
            </li>
          </ul>
        </DetailSectionCard>

        <DetailSectionCard title="Stack used">
          <div className="flex flex-wrap gap-2">
            {[
              "Django",
              "DRF",
              "React",
              "Google Places API",
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
            The project combined backend API design with frontend interface
            development, focusing on real-world data integration and user
            accessibility.
          </p>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Impact & achievements">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Built a fullstack architecture combining backend logic and
              frontend UI
            </li>
            <li>
              Implemented real-world API integration for location-based features
            </li>
            <li>Designed scalable API structure using Django REST Framework</li>
            <li>Applied backend event handling using Django signals</li>
            <li>
              Delivered a functional product addressing real-world navigation
              challenges
            </li>
          </ul>
        </DetailSectionCard>
      </div>

      <div className="mt-8">
        <DetailSectionCard title="Project availability">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            This project is not publicly deployed. The portfolio version focuses
            on architecture, technical decisions, and implemented functionality.
          </p>
        </DetailSectionCard>
      </div>
    </ProjectPageLayout>
  );
}