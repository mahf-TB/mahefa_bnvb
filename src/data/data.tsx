import { Csharp } from "@/components/icons/Csharp";
import { Docker } from "@/components/icons/Docker";
import { Golang } from "@/components/icons/Golang";
import { Java } from "@/components/icons/java";
import { Kubernetes } from "@/components/icons/kubernetes";
import { NextjsIconDark } from "@/components/icons/nextjsIconDark";
import { Nodejs } from "@/components/icons/nodejs";
import { Postgresql } from "@/components/icons/postgresql";
import { Python } from "@/components/icons/python";
import { ReactDark } from "@/components/icons/reactDark";
import { ReactLight } from "@/components/icons/reactLight";
import { Typescript } from "@/components/icons/typescript";

export const DATA = {
  name: "ANDRIMAHEFA Tsilavirintsoa Bienvenu",
  role: "Développeur Full-Stack Web & Mobile",
  location: "Madagascar",
  shortDescription:
    "Développeur full-stack passionné par la création d’applications web et mobiles performantes, orientées expérience utilisateur et valeur business.",
  description:
    "Je suis développeur full-stack avec une solide expérience dans le développement d’applications SaaS, e-commerce et mobiles. J’accompagne entreprises, institutions et entrepreneurs dans la conception de solutions digitales modernes, sécurisées et évolutives. Mon approche combine rigueur technique, architecture propre et focus sur l’impact utilisateur.",
  highlights: [
    "Développement SaaS (B2B & B2C)",
    "Applications web & mobiles cross-platform",
    "Architecture propre et scalable",
    "Orientation business & expérience utilisateur",
    "Autonomie, responsabilité et sens du détail",
  ],
  availability: "Ouvert aux opportunités freelance et projets SaaS",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  experiences: [
    {
      title: "Développeur WordPress Freelance – AlteraPlus",
      dates: "Mois d'août 2025",
      location: "Projet Freelance – Site E-commerce & Formations",
      link: "https://alteraplus.com/",
      description:
        "Conception et développement du site AlteraPlus, une plateforme e-commerce dédiée à une coach professionnelle proposant des formations pour particuliers (B2C) et entreprises (B2B). Le site intègre la vente de formations, la gestion des contacts, des campagnes email automatisées et un espace blog pour le contenu éducatif. Mise en place d’un tunnel de vente optimisé et d’un système de communication automatisé pour améliorer la conversion et la fidélisation.",
      image: "/images/1.png",
      links: [
        { title: "WordPress", href: "https://wordpress.org" },
        { title: "WooCommerce", href: "https://woocommerce.com" },
        { title: "Elementor", href: "https://elementor.com" },
        {
          title: "PHP",
          icon: <ReactDark className="h-4 w-4" />,
          href: "https://www.php.net",
        },
        { title: "Email Marketing", href: "https://mailchimp.com" },
      ],
    },
    {
      title: "Développeur Full-Stack Freelance – Quincaillerie Havana",
      dates: "Janvier 2025 – Juillet 2025",
      location: "Projet professionnel interne",
      description:
        "Développement d’une application interne de suivi et de gestion des ventes et des stocks, permettant un contrôle de l’inventaire en temps réel. Mise en place d’une interface moderne et d’un système de surveillance intelligente pour améliorer la fiabilité et la performance des opérations.",
      image: "/images/vite.svg",
      links: [
        {
          title: "React",
          icon: <ReactDark className="h-4 w-4" />,
          href: "https://react.dev",
        },
        { title: "Express.js", href: "https://expressjs.com" },
        { title: "MongoDB", href: "https://www.mongodb.com" },
        { title: "OpenCV", href: "https://opencv.org" },
        {
          title: "Tailwind CSS",
          // icon: TailwindcssIcon,
          href: "https://tailwindcss.com",
        },
        { title: "Shadcn/UI", href: "https://ui.shadcn.com" },
      ],
    },

    {
      title: "Développeur Full-Stack (Stagiaire) – ONIRTECH",
      dates: "Août 2024 – Décembre 2024",
      location: "Stage professionnel",
      description:
        "Développement complet d’une application SaaS éducative avec authentification, gestion d’état optimisée et collaboration en temps réel. Intégration de Trello pour le suivi des tâches et amélioration significative de l’expérience utilisateur grâce à un design moderne et responsive.",
      image: "/images/onirtech.png",
      links: [
        {
          title: "React",
          icon: <ReactDark className="h-4 w-4" />,
          href: "https://react.dev",
        },
        {
          title: "Next.js",
          icon: <NextjsIconDark className="h-4 w-4" />,
          href: "https://nextjs.org",
        },
        {
          title: "Node.js",
          icon: <Nodejs className="h-4 w-4" />,
          href: "https://nodejs.org",
        },
        {
          title: "MongoDB",
          icon: <Postgresql className="h-4 w-4" />,
          href: "https://www.mongodb.com",
        },
        { title: "Zustand", href: "https://zustand-demo.pmnd.rs" },
      ],
    },

    {
      title: "Développeur Full-Stack – Ministère de l’Économie et des Finances",
      dates: "Août 2023 – Février 2024",
      location: "Administration publique",
      description:
        "Conception et développement d’une application de suivi et de gestion de l’évolution de carrière des agents, permettant un accès en temps réel aux changements de statut et promotions. Interface intuitive ayant réduit significativement le temps de navigation.",
      image: "/images/mfe.png",
      links: [
        { title: "Laravel", href: "https://laravel.com" },
        { title: "PHP", href: "https://www.php.net" },
        { title: "Vue.js", href: "https://vuejs.org" },
        { title: "Oracle Database", href: "https://www.oracle.com/database" },
        { title: "Tailwind CSS", href: "https://tailwindcss.com" },
      ],
    },
  ],
  education: [
    {
      school: "École Nationale d’Informatique (ENI)",
      href: "https://eni.mg",
      degree: "Master 2 en Informatique – Génie Logiciel & Bases de Données",
      location: "Fianarantsoa, Madagascar",
      logoUrl: "https://eni.mg/wp-content/uploads/2023/12/cropped-cropped-ENI_logo-removebg-preview-1-57x57.png",
      start: "2025",
      end: "Actuellement",
    },
    {
      school: "École Nationale d’Informatique (ENI)",
      href: "https://eni.mg",
      degree: "Licence 3 en Informatique – Génie Logiciel & Bases de Données",
      location: "Fianarantsoa, Madagascar",
      logoUrl: "https://eni.mg/wp-content/uploads/2023/12/cropped-cropped-ENI_logo-removebg-preview-1-57x57.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Lycée AMJ Ambalavao",
      href: "https://lycee-amj.mg",
      degree: "Baccalauréat Série C",
      location: "Ambalavao, Fianarantsoa, Madagascar",
      logoUrl: "",
      start: "2021",
      end: "2021",
    },
  ],
};
