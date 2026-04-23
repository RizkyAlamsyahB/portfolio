import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "AFI Sport E-Commerce",
  category: "Fullstack · E-Commerce",
  heroImg: "/projects/ecommerce.png",
  tagline:
    "Sports e-commerce platform with Midtrans payment integration, RajaOngkir shipping cost calculation, optimized checkout flow, and real-time order tracking.",
  year: "2025",
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
};

export default function AfiSportDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
