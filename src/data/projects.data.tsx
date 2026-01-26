import { Expressjs } from "@/components/icons/Expressjs";
import { Figma } from "@/components/icons/Figma";
import Laravel from "@/components/icons/Laravel";
import Logo from "@/components/logos/Logo";
import MongoDB from "@/components/icons/MongoDb";
import Nestjs from "@/components/icons/Nestjs";
import { NextjsIconDark } from "@/components/icons/nextjsIconDark";
import { Nodejs } from "@/components/icons/nodejs";
import { OpenCV } from "@/components/icons/OpenCV";
import { Oracle } from "@/components/icons/Oracle";
import PHP from "@/components/icons/PHP";
import { Postgresql } from "@/components/icons/postgresql";
import { ReactDark } from "@/components/icons/reactDark";
import { ReactLight } from "@/components/icons/reactLight";
import { ReactQuery } from "@/components/icons/ReactQuery";
import { Redis } from "@/components/icons/Redis";
import { Shadcn } from "@/components/icons/shadcn";
import { Tailwindcss } from "@/components/icons/Tailwindcss";
import { Trello } from "@/components/icons/Trello";
import { Zustand } from "@/components/icons/Zustand";
import LogoOnirtech from "@/components/logos/LogoOnirtech";
import LogoMFE from "@/components/logos/LogoMFE";
import LogoIntsales from "@/components/logos/LogoIntsales";
import LogoEni from "@/components/logos/LogoEni";
import LogoSell2Door from "@/components/logos/LogoSell2Door";
import Nuxt from "@/components/icons/Nuxt";
import { Mysql } from "@/components/icons/Mysql";
import { OpenAI } from "@/components/icons/OpenAI";
import Vuejs from "@/components/icons/Vuejs";

export const PROJECTS = [
  {
    id: "quincaillerie-havana",
    title: "Système de Gestion des Ventes & Stocks – Quincaillerie Havana",
    subtitle: "Projet intern – Plateforme de gestion",
    description:
      "Application interne conçue pour optimiser la gestion des ventes et le suivi des stocks en temps réel au sein d’une quincaillerie.",
    periode: "2022 - 2023",
    logo: <Logo />,
    list: [
      "Suivi et contrôle de l’inventaire en temps réel",
      "Gestion des ventes et des mouvements de stock",
      "Interface moderne et ergonomique",
      "Intégration de la surveillance intelligente",
    ],
    stacks: [
      {
        title: "React",
        icon: <ReactDark className="h-5 w-5" />,
        href: "https://react.dev",
      },
      {
        title: "Express.js",
        icon: <Expressjs className="h-5 w-5" />,
        href: "https://expressjs.com",
      },
      {
        title: "MongoDB",
        icon: <MongoDB className="h-5 w-5" />,
        href: "https://www.mongodb.com",
      },
      {
        title: "OpenCV",
        icon: <OpenCV className="h-5 w-5" />,
        href: "https://opencv.org",
      },
      {
        title: "Tailwind CSS",
        icon: <Tailwindcss className="h-5 w-5" />,
        href: "https://tailwindcss.com",
      },
      {
        title: "Shadcn/UI",
        icon: <Shadcn className="h-5 w-5" />,
        href: "https://ui.shadcn.com",
      },
    ],
    images: '/images/havana.png',
  },
  {
    id: "onirtech-saas-education",
    title: "Plateforme LMS Éducative – ONIRTECH",
    subtitle: "Projet professionnel – Collaboration éducative",
    description:
      "Application  LMS développée dans un contexte professionnel, visant à améliorer l’apprentissage collaboratif et la gestion des contenus.",
    periode: "2023 - 2024",
    logo: <LogoOnirtech />,
    list: [
      "Système d’authentification sécurisé",
      "Gestion d’état optimisée avec Zustand",
      "Collaboration et suivi des tâches via Trello",
      "Design moderne et responsive",
    ],
    stacks: [
      { title: "React", icon: <ReactDark className="h-5 w-5" />, href: "https://react.dev" },
      { title: "Next.js", icon: <NextjsIconDark className="h-5 w-5" />, href: "https://nextjs.org" },
      { title: "Node.js", icon: <Nodejs className="h-5 w-5" />, href: "https://nodejs.org" },
      { title: "MongoDB", icon: <MongoDB className="h-5 w-5" />, href: "https://www.mongodb.com" },
      { title: "Zustand", icon: <Zustand className="h-5 w-5" />, href: "https://zustand-demo.pmnd.rs" },
      { title: "Trello", icon: <Trello className="h-5 w-5" />, href: "https://trello.com" },
    ],
    images: '/gift/projet-onirtech.gif',
  },
  {
    id: "ministere-economie-carriere",
    title:
      "Système de Gestion de Carrière – Ministère de l’Économie et des Finances",
    subtitle: "Application institutionnelle – Gestion des carrières",
    description:
      "Application institutionnelle destinée au suivi et à la gestion de l’évolution de carrière des agents de l’administration publique.",
    periode: "2021 - 2022",
    logo: <LogoMFE />,
    list: [
      "Suivi en temps réel des changements de statut",
      "Gestion des promotions et historiques de carrière",
      "Interface intuitive et accessible",
      "Optimisation du temps de navigation",
    ],
    stacks: [
      { title: "Laravel", icon: <Laravel className="h-5 w-5" />, href: "https://laravel.com" },
      { title: "PHP", icon: <PHP className="h-5 w-5" />, href: "https://www.php.net" },
      { title: "Vue.js", icon: <Nuxt />, href: "https://vuejs.org" },
      { title: "Oracle Database", icon: <Oracle className="h-5 w-5" />, href: "https://www.oracle.com/database" },
      { title: "Tailwind CSS", icon: <Tailwindcss className="h-5 w-5" />, href: "https://tailwindcss.com" },
    ],
    images:'/images/ecommerce-login.png',
    isScale:true
  },
  {
    id: "saas-b2b-gestion-commerciale",
    title: "Intsales SaaS Multi-Tenant – Gestion Commerciale B2B",
    subtitle: "SaaS multi-tenant – Gestion commerciale",
    description:
      "Plateforme SaaS scalable destinée aux entreprises B2B pour la gestion commerciale et des stocks, avec analyses avancées.",
    periode: "2024",
    logo: <LogoIntsales />,
    list: [
      "Architecture multi-tenant sécurisée",
      "Gestion des stocks et opérations commerciales",
      "Tableaux de bord analytiques en temps réel",
      "Support de forte charge utilisateur",
    ],
    stacks: [
      { title: "React", icon: <ReactDark className="h-5 w-5" />, href: "https://react.dev" },
      { title: "NestJS", icon: <Nestjs className="h-5 w-5" />, href: "https://nestjs.com" },
      { title: "PostgreSQL", icon: <Postgresql className="h-5 w-5" />, href: "https://www.postgresql.org" },
      { title: "Redis", icon: <Redis className="h-5 w-5" />, href: "https://redis.io" },
      { title: "Shadcn/UI", icon: <Shadcn className="h-5 w-5" />, href: "https://ui.shadcn.com" },
    ],
    images: '/images/login-intsales.png',
  },
  {
    id: "ecommerce-platform",
    title: "Plateforme E-Commerce Complète",
    subtitle: "Solution complète e-commerce",
    description:
      "Solution e-commerce complète intégrant la gestion des produits, commandes et paiements, orientée performance et expérience utilisateur.",
    periode: "2023",
    logo: <Logo />,
    list: [
      "Gestion des produits et commandes",
      "Paiements sécurisés",
      "Notifications en temps réel",
      "Gestion d’état optimisée",
    ],
    stacks: [
      { title: "React", icon: <ReactDark className="h-5 w-5" />, href: "https://react.dev" },
      { title: "Node.js", icon: <Nodejs className="h-5 w-5" />, href: "https://nodejs.org" },
      { title: "Express.js", icon: <Expressjs className="h-5 w-5" />, href: "https://expressjs.com" },
      { title: "MongoDB", icon: <MongoDB className="h-5 w-5" />, href: "https://www.mongodb.com" },
      { title: "React Query", icon: <ReactQuery className="h-5 w-5" />, href: "https://tanstack.com/query" },
    ],
    images: "/images/ecommerce.png"
  },
  {
    id: "agritech-digital-platform",
    title: "Plateforme de Digitalisation Agricole & Paiements",
    subtitle: "Plateforme agro digitale",
    description:
      "Plateforme digitale facilitant les échanges agricoles, intégrant paiements en ligne et recommandations intelligentes.",
    periode: "2022 - 2023",
    logo: <LogoEni />,
    list: [
      "Digitalisation des échanges de matières premières",
      "Paiements en ligne sécurisés",
      "Optimisation des stocks",
      "Recommandations intelligentes",
    ],
    stacks: [
      { title: "React", icon: <ReactDark className="h-5 w-5" />, href: "https://react.dev" },
      { title: "NestJS", icon: <Nestjs className="h-5 w-5" />, href: "https://nestjs.com" },
      { title: "MySQL", icon: <Mysql />, href: "https://www.mysql.com" },
      { title: "OpenAI", icon: <OpenAI />, href: "https://openai.com" },
    ],
    images:  "/images/agro.png",
    isScale:true
  },
  {
    id: "sell2door-saas-delivery",
    title: "Sell2Door – SaaS Service de Livraison Géolocalisée",
    subtitle: "Application mobile – Livraison géolocalisée",
    description:
      "Application SaaS mobile connectant commerçants, clients et livreurs autour d’un système de livraison intelligent.",
    periode: "2021 - 2022",
    logo: <LogoSell2Door />,
    list: [
      "Commande directe par les clients",
      "Gestion des ventes côté commerçants",
      "Attribution de missions aux livreurs",
      "Suivi géolocalisé et cartographie interactive",
    ],
    stacks: [
      { title: "React Native", icon: <ReactLight className="h-5 w-5" />, href: "https://reactnative.dev" },
      { title: "NestJS", icon: <Nestjs className="h-5 w-5" />, href: "https://nestjs.com" },
      { title: "PostgreSQL", icon: <Postgresql className="h-5 w-5" />, href: "https://www.postgresql.org" },
    ],
    images: "/images/mobile-2.png",
    isMobile:true
  },
  {
    id: "residence-universitaire",
    title: "Système de Gestion de Résidence Universitaire",
    subtitle: "Application de gestion résidentielle",
    description:
      "Application de gestion complète pour les résidences universitaires, orientée suivi en temps réel et simplicité d’utilisation.",
    periode: "2020 - 2021",
    logo: <LogoEni />,
    list: [
      "Gestion des occupants",
      "Attribution des chambres",
      "Suivi des paiements de loyers",
      "Interfaces claires et intuitives",
    ],
    stacks: [
      { title: "Vue.js", icon: <Vuejs />, href: "https://vuejs.org" },
      { title: "Laravel", icon: <Laravel className="h-5 w-5" />, href: "https://laravel.com" },
      { title: "MySQL", icon: <Mysql className="h-5 w-5" />, href: "https://www.mysql.com" },
      { title: "Merise", icon: <Shadcn />, href: "https://fr.wikipedia.org/wiki/Merise" },
    ],
    images: "/gift/lodgeIHM.gif"
  },
  {
    id: "saas-uxui-design",
    title: "Flow & UX/UI Design de Plateformes SaaS – Intsales & Sell2Door",
    subtitle: "UX/UI design de plateformes SaaS",
    description:
      "Conception UX/UI de deux plateformes SaaS majeures : une application mobile de service de livraison géolocalisée (Sell2Door) et une plateforme B2B de gestion commerciale (IntSales). Les designs sont orientés performance, clarté des parcours et expérience utilisateur optimale.",
    periode: "2023",
    list: [
      "Analyse des besoins utilisateurs (B2C, B2B, livreurs, commerçants)",
      "Définition des user flows et parcours métier",
      "Création de wireframes basse et moyenne fidélité",
      "Conception de maquettes UI haute fidélité",
      "Design de dashboards analytiques SaaS",
      "Mise en place de composants UI réutilisables",
      "Optimisation de l’ergonomie mobile et desktop",
    ],
    logo: <Figma className="h-full w-full" />,
    stacks: [
      { title: "Figma", icon: <Figma className="h-5 w-5" />, href: "https://figma.com" },
      { title: "React", icon: <ReactDark className="h-5 w-5" />, href: "https://react.dev" },
      { title: "Tailwind CSS", icon: <Tailwindcss className="h-5 w-5" />, href: "https://tailwindcss.com" },
      { title: "Shadcn/UI", icon: <Shadcn className="h-5 w-5" />, href: "https://ui.shadcn.com" },
    ],
    images: "/images/figma/figma-project.png", 
  },
];
