import { Figma } from "@/components/icons/Figma";

export const FEATURED = [
  {
    id: 1,
    type: "platform",
    title: "Personal Project – B2B Platform",
    subtitle: "Intsales – Multi-Tenant Sales Management",
    logo: "/images/intsales.webp",
    description:
      "Platform designed for B2B companies to manage sales and inventory, featuring analytical dashboards.",
    features: [
      "Sales and inventory management",
      "Multi-tenant architecture",
      "Analytical dashboards",
    ],
    images: ["/images/login-intsales.webp"],
  },

  {
    id: 2,
    type: "uiux",
    title: "UI/UX Mockups – Web & Mobile Projects",
    subtitle: "Intsales & Sell2Door",
    logo: <Figma className="h-full w-full" />,
    description:
      "Design of high-fidelity UI mockups and user flows for web and mobile platforms.",
    features: [
      "Wireframes & Figma mockups",
      "Dashboard design",
      "User journey optimization",
    ],
    images: ["/images/figma/figma-project.webp", "/images/figma/figma.webp"],
  },

  {
    id: 3,
    type: "mobile",
    title: "Developed Mobile Application",
    subtitle: "Sell2Door – Geolocated Delivery",
    description:
      "Mobile app connecting merchants, customers, and delivery drivers through an intelligent delivery system.",
    features: [
      "Real-time delivery tracking",
      "Geolocation",
      "Merchant / Customer / Delivery ecosystem",
    ],
    images: ["/images/mobile-2.webp"],
  },

  {
    id: 4,
    type: "stack",
    title: "Main Technical Stack",
    subtitle: "Technologies used daily",
    logo: "/images/figma-logo.png",
    description:
      "Technologies and tools I regularly use to design and develop web and mobile applications.",
    features: [
      "React / Next.js / Vite",
      "Node.js / Express / NestJS",
      "MongoDB / MySQL / PostgreSQL",
      "Tailwind CSS / shadcn/ui / Figma",
    ],
    images: ["/images/figma-uiux.png"],
  },
];
