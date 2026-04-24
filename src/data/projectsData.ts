export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  href: string;
  cta: string;
  featured?: boolean;
  kind?: "public-reference" | "rebuild-demo" | "personal";
  visualType?: "abstract" | "thumbnail" | "video-placeholder";
  label?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Inner Smile Company",
    description:
      "Worked on a Vue-based wellbeing platform in a production environment, focusing on animated UI, user-facing pages, and interaction design.",
    stack: [  
      "Vue 3",
      "TypeScript",
      "Nx Monorepo",
      "Vite",
      "GSAP",
      "Vue Router",
      "i18n",
      "REST APIs"
    ],
    href: "/projects/inner-smile",
    cta: "Read case summary",
    featured: true,
    kind: "public-reference",
    visualType: "abstract",
    label: "Public project reference",
    note: "Client UI not shown due to NDA",
  },
  {
    id: 2,
    title: "EnergieApp",
    description:
      "Contributed to a Nuxt-based wellbeing application with focus on reusable UI, animation, and production-ready frontend logic.",
    stack: ["Nuxt 4",
              "Vue 3",
              "TypeScript",
              "Pinia",
              "GSAP",
              "i18n",
              "VeeValidate",
              "Azure MSAL",
              "REST APIs",
              "Typed Router",
            ],
    href: "/projects/energieapp",
    cta: "Read case summary",
    featured: true,
    kind: "public-reference",
    visualType: "abstract",
    label: "Public project reference",
    note: "Based on publicly available information",
  },
  {
    id: 3,
    title: "Location Finder Platform",
    description:
      "Fullstack platform built with Django REST Framework and React to help users find essential nearby services. Integrated Google Places API, multilingual support, and backend signal-based messaging workflows.",
    stack: ["Django", "DRF", "React", "Google Places API", "i18n"],
    href: "/projects/location-finder",
    cta: "Read case summary",
    kind: "personal",
    visualType: "abstract",
    label: "Fullstack project",
    note: "Project not publicly deployed",
  },
  {
    id: 4,
    title: "TaskPro – Activity Management App",
    description:
      "Team-developed task management application built with React and Redux Toolkit, featuring routing, persistent state, form validation, and structured UI using Material UI.",
    stack: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Formik",
      "Yup",
      "Material UI",
      "Redux Persist",
    ],
    href: "/projects/taskpro",
    cta: "Read case summary",
    kind: "personal",
    visualType: "abstract",
    label: "Team project",
    note: "Collaborative frontend project",
  },
  {
    id: 5,
    title: "Budget Boss",
    description:
      "Personal finance application with authentication, transaction tracking, and interactive data visualization. Focused on main page logic and component styling within a team environment.",
    stack: [
      "React",
      "Redux Toolkit",
      "Axios",
      "Recharts",
      "Formik",
      "Yup",
      "Styled Components",
      "React Router",
    ],
    href: "/projects/budget-boss",
    cta: "Read case summary",
    kind: "personal",
    visualType: "abstract",
    label: "Team project",
    note: "Frontend-focused contribution",
  },
  {
    id: 6,
    title: "Borshchahivka Spiders (Volunteer Initiative)",
    description:
      "Frontend development for a volunteer initiative website supporting camouflage net production, with focus on responsive UI and clear content structure.",
    stack: ["JavaScript", "React", "Material UI", "SCSS"],
    href: "/projects/borshchahivka-spiders",
    cta: "Read case summary",
    kind: "personal",
    visualType: "abstract",
    label: "Volunteer project",
    note: "Project not publicly available",
  },
  {
    id: 7,
    title: "Cocktails Project",
    description:
      "Frontend web application for searching and saving cocktail recipes, with custom pagination, local storage persistence, and optimized API request handling.",
    stack: ["JavaScript", "Axios", "Parcel", "SCSS", "Local Storage"],
    href: "/projects/cocktails-project",
    cta: "Read case summary",
    kind: "personal",
    visualType: "thumbnail",
    label: "Frontend project",
    note: "Live demo available",
  }
];