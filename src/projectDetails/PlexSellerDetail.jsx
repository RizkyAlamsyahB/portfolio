import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Plex Seller ERP",
  category: "ERP · Enterprise",
  images: [
    "/projects/plexseller.png",
    "/projects/plexseller.jpg"
  ],
  tagline:
    "Enterprise ERP system built with Express.js, TypeScript, React.js, RabbitMQ, and Docker — featuring an internal chat module and Lazada marketplace integration.",
  year: "2025",
  stack: [
    "Express.js",
    "TypeScript",
    "React.js",
    "RabbitMQ",
    "Docker",
    "Lazada API",
    "PostgreSQL",
  ],
  features: [
    "Internal real-time chat module for inter-department team communication within the ERP system.",
    "Lazada marketplace API integration for product synchronization and order management.",
    "RabbitMQ message queue for asynchronous task processing and inter-service communication.",
    "Dockerized services for consistent development and production environments.",
    "TypeScript throughout the stack for type safety and improved code maintainability.",
    "Modular ERP architecture supporting multiple business domains.",
  ],
  impact: [
    "Chat module improved internal communication speed without relying on third-party messaging tools.",
    "Lazada integration enabled centralized multi-channel order management.",
    "Hands-on exposure to enterprise-grade async architecture with RabbitMQ in a production ERP environment.",
  ],
  links: {
    live: null,
    repo: null,
  },
  notes: "Probation project — internal enterprise system.",
};

export default function PlexSellerDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
