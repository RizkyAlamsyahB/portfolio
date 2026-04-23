// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  "haji-umroh-store": {
    title: "Haji Umroh Store",
    category: "Government Project · Backend",
    tagline:
      "Backend API service for a Haji & Umroh e-commerce platform, deployed to government servers with payment, shipping, object storage, caching, and full CI/CD pipeline.",
    year: "2025 – Present",
    duration: "Current",
    role: "Backend Engineer & DevOps Engineer",
    teamSize: "Government Project Team",
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
      "Agile Scrum"
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
  },
  "rewrite-pmii": {
    title: "Rewrite Web PMII",
    category: "Modernization · Golang",
    tagline:
      "Full backend rewrite of a legacy system to Golang, with database schema migration from the old system to a new PostgreSQL structure, plus CI/CD and cloud deployment.",
    year: "2025 – Present",
    duration: "Current",
    role: "Backend Developer & DevOps",
    teamSize: "Team",
    stack: [
      "Golang",
      "Gin Framework",
      "PostgreSQL",
      "Database Migration",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Cloud Deployment",
      "Agile Scrum"
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
  },
  "plex-seller": {
    title: "Plex Seller ERP",
    category: "ERP · Enterprise",
    tagline:
      "Enterprise ERP system built with Express.js, TypeScript, React.js, RabbitMQ, and Docker — featuring an internal chat module and Lazada marketplace integration.",
    year: "2025",
    duration: "Probation (2025)",
    role: "Full Stack Developer",
    teamSize: "Enterprise Team",
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
  },
  "alena-soccer": {
    title: "Alena Soccer",
    category: "Fullstack · Laravel",
    tagline:
      "End-to-end futsal field reservation system with QRIS payment via Midtrans, POS module, membership management, and automated financial reporting — validated with 113 black-box test scenarios.",
    year: "2025",
    duration: "Feb 2025 – Jun 2025 (5 bulan)",
    role: "Full Stack Web Developer",
    teamSize: "Solo Developer",
    stack: [
      "Laravel",
      "MySQL",
      "Midtrans Payment Gateway",
      "QRIS",
      "Blade Templating",
      "Bootstrap",
      "RESTful API",
    ],
    features: [
      "Online field reservation: customers can check schedule, select time slots, and book in real-time.",
      "QRIS + Midtrans integration: seamless cashless payment with automatic status callback and reconciliation.",
      "Point of Sales (POS) module for walk-in customers and on-site transactions.",
      "Membership system: customer tier management with loyalty tracking and member discounts.",
      "Automated financial reports: daily/monthly revenue summaries generated from transaction data.",
      "Role-based access: admin, cashier, and customer roles with appropriate permission levels.",
      "113 black-box test scenarios executed with 100% pass rate against specification.",
    ],
    impact: [
      "Replaced manual booking process with a fully online, real-time reservation system.",
      "QRIS payment reduced cash-handling errors and sped up transaction processing significantly.",
      "100% test coverage gave confidence in system stability before production handover.",
    ],
    links: {
      live: null,
      repo: "https://github.com/RizkyAlamsyahB",
    },
  },
  "elibrary-bawaslu": {
    title: "E-Library Bawaslu",
    category: "Government · Fullstack",
    tagline:
      "Internal E-Library system for Bawaslu Kota Surabaya — built with Node.js, Vue.js, and MySQL, integrated with OwnCloud for document management, developed using Agile Scrum.",
    year: "2024",
    duration: "Jul 2024 – Aug 2024 (2 bulan)",
    role: "Full Stack Web Developer & Team Lead",
    teamSize: "Tim Kecil",
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
  },
  "afi-sport": {
    title: "AFI Sport E-Commerce",
    category: "Fullstack · E-Commerce",
    tagline:
      "Sports e-commerce platform with Midtrans payment integration, RajaOngkir shipping cost calculation, optimized checkout flow, and real-time order tracking.",
    year: "2025",
    duration: "Jul 2025 – Aug 2025 (2 bulan)",
    role: "Full Stack Web Developer",
    teamSize: "Solo Developer",
    stack: [
      "Laravel",
      "MySQL",
      "Midtrans Payment Gateway",
      "RajaOngkir API",
      "Blade Templating",
      "Bootstrap / CSS",
    ],
    features: [
      "Product catalog with category filtering and search for sports goods.",
      "Midtrans payment integration: credit card, bank transfer, and QRIS support with webhook callback.",
      "RajaOngkir API: automatic shipping cost calculation across all major Indonesian couriers.",
      "Optimized multi-step checkout flow: cart → address → shipping → payment → confirmation.",
      "Order tracking: real-time order status updates from payment confirmed through to delivery.",
      "Admin dashboard: order management, product management, and sales reporting.",
    ],
    impact: [
      "Automated shipping cost calculation eliminated manual price lookup and improved checkout accuracy.",
      "Midtrans integration provided a trusted, secure payment experience for customers.",
      "Streamlined checkout flow reduced cart abandonment and improved conversion for the sports store.",
    ],
    links: {
      live: null,
      repo: "https://github.com/RizkyAlamsyahB",
    },
    notes: "Freelance project for AFI Sport, Bojonegoro — Jul–Aug 2025.",
  },
};
