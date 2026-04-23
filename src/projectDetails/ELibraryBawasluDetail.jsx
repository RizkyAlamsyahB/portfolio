import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "E-Library Bawaslu",
  category: "Government · Fullstack",
  heroImg: "/projects/elibrary.png",
  tagline:
    "Internal E-Library system for Bawaslu Kota Surabaya — built with Node.js, Vue.js, and MySQL, integrated with OwnCloud for document management, developed using Agile Scrum.",
  year: "2024",
  stack: [
    "Node.js",
    "Express.js",
    "Vue.js",
    "MySQL",
    "OwnCloud Integration",
    "RESTful API",
    "Agile Scrum",
  ],
  features: [
    "Centralized document management integrated with OwnCloud for secure file storage and retrieval.",
    "Internal REST API for accessing documents, activity reports, and cross-department data.",
    "Vue.js frontend with role-based views for staff, managers, and admin.",
    "Activity log and report generation for inter-department transparency.",
    "Agile Scrum development: sprint planning, daily standups, and iterative delivery.",
    "Deployment to internal government server infrastructure.",
  ],
  impact: [
    "Accelerated document management processes and improved organizational transparency at Bawaslu Surabaya.",
    "Replaced manual filing with a searchable, structured digital library accessible across departments.",
    "Led team from requirements analysis through to deployment as Team Lead during internship.",
  ],
  links: {
    live: null,
    repo: "https://github.com/RizkyAlamsyahB",
  },
  notes: "Government internship project at Bawaslu Kota Surabaya, Jul–Aug 2024.",
};

export default function ELibraryBawasluDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
