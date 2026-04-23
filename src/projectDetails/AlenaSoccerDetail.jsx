import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Alena Soccer",
  category: "Fullstack · Laravel",
  heroImg: "/projects/alena.png",
  tagline:
    "End-to-end futsal field reservation system with QRIS payment via Midtrans, POS module, membership management, and automated financial reporting — validated with 113 black-box test scenarios.",
  year: "2025",
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
};

export default function AlenaSoccerDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
