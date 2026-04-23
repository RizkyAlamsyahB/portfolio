import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Rewrite Web PMII",
  category: "Modernization · Golang",
  images: [
    "/projects/pmii.png",
    "/projects/landing-page-pmii.png"
  ],
  tagline:
    "Full backend rewrite of a legacy system to Golang, with database schema migration from the old system to a new PostgreSQL structure, plus CI/CD and cloud deployment.",
  year: "2025 – Present",
  stack: [
    "Golang",
    "Gin Framework",
    "PostgreSQL",
    "Database Migration",
    "Docker",
    "GitHub Actions (CI/CD)",
    "Cloud Deployment",
  ],
  features: [
    "Complete backend rewrite from legacy stack to idiomatic Golang with clean architecture.",
    "New PostgreSQL schema designed for scalability and future feature development.",
    "Database migration pipeline: data transfer from old system schema to new structure with zero data loss.",
    "CI/CD pipeline setup with GitHub Actions for automated build, test, and deploy.",
    "Cloud deployment with containerized services for easier scaling and maintenance.",
    "API documentation for all endpoints to streamline front-end integration and onboarding.",
  ],
  impact: [
    "Modernized codebase from legacy system to production-ready Golang backend.",
    "New schema significantly improved query performance and data integrity.",
    "CI/CD automation reduced deployment time and enabled rapid iteration.",
  ],
  links: {
    live: null,
    repo: null,
  },
  notes: "Internal modernization project.",
};

export default function RewritePMIIDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
