import { Figma } from "@/components/icons/Figma";

export const FEATURED = [
  {
    id: 1,
    type: "platform",
    title: "Projet personnel – Plateforme B2B",
    subtitle: "Intsales – Gestion commerciale multi-tenant",
    logo: "/images/intsales.png",
    description:
      "Plateforme destinée aux entreprises B2B pour la gestion des ventes et des stocks, avec tableaux de bord analytiques.",
    features: [
      "Gestion des ventes et des stocks",
      "Architecture multi-tenant",
      "Tableaux de bord analytiques",
    ],

    images: ["/images/login-intsales.png"],
  },

  {
    id: 2,
    type: "uiux",
    title: "Maquettes UI/UX – Projets web et mobiles",
    subtitle: "Intsales & Sell2Door",
    logo: <Figma className="h-full w-full" />,
    description:
      "Conception de maquettes UI haute fidélité et de parcours utilisateurs pour des plateformes web et mobiles.",
    features: [
      "Wireframes & maquettes Figma",
      "Design de dashboards",
      "Optimisation des parcours utilisateurs",
    ],
    images: ["/images/figma/figma-project.png", "/images/figma/figma.png"],
  },

  {
    id: 3,
    type: "mobile",
    title: "Application mobile développée",
    subtitle: "Sell2Door – Livraison géolocalisée",
    description:
      "Application mobile connectant commerçants, clients et livreurs autour d’un système de livraison intelligent.",
    features: [
      "Suivi des livraisons en temps réel",
      "Géolocalisation",
      "Écosystème commerçant / client / livreur",
    ],

    images: ["/images/mobile-2.png"],
  },

  {
    id: 4,
    type: "stack",
    title: "Stack technique principale",
    subtitle: "Technologies utilisées au quotidien",
    logo: "/images/figma-logo.png",
    description:
      "Technologies et outils que j’utilise régulièrement pour concevoir et développer des applications web et mobiles.",
    features: [
      "React / Next.js / Vite",
      "Node.js / Express / NestJS",
      "MongoDB / MySQL / PostgreSQL",
      "Tailwind CSS / shadcn/ui / Figma",
    ],
    images: ["/images/figma-uiux.png"],
  },
];
