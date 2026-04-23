import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Haji Umroh Store",
  category: "Government Project · Backend",
  images: [
    "/projects/haji-umroh-store.png",
    "/projects/landing-page-haji.png"
  ],
  tagline:
    "Backend API service for a Haji & Umroh e-commerce platform, deployed to government servers with payment, shipping, object storage, caching, and full CI/CD pipeline.",
  year: "2025 – Present",
  stack: [
    "Golang",
    "PostgreSQL",
    "Redis",
    "AWS",
    "MinIO Object Storage",
    "Xendit Payment Gateway",
    "RajaOngkir Shipping API",
    "Docker",
    "GitHub Actions (CI/CD)",
  ],
  features: [
    "RESTful API backend built in Golang for product catalog, orders, and user management.",
    "Redis caching layer for high-frequency data to reduce database load and improve response times.",
    "MinIO object storage integration for product images and document management.",
    "Xendit payment integration: invoice creation, payment status tracking, and webhook handling.",
    "RajaOngkir shipping integration: automatic shipping cost calculation across Indonesian couriers.",
    "CI/CD pipeline with GitHub Actions and containerized deployment via Docker.",
    "Production deployment to government server infrastructure with secure configuration management.",
  ],
  impact: [
    "Deployed to a government server, delivering a production-ready platform for Haji & Umroh travel packages.",
    "Caching layer significantly reduced API latency for product browsing and search operations.",
    "Automated CI/CD pipeline accelerated the release cycle and reduced manual deployment risk.",
  ],
  links: {
    live: null,
    repo: null,
  },
  notes: "Internal government project — repository and live URL are confidential.",
};

export default function HajiUmrohStoreDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
