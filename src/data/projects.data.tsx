import { Expressjs } from "@/components/icons/Expressjs";
import { Figma } from "@/components/icons/Figma";
import { GitHubIcons } from "@/components/icons/GitHubIcons";
import Laravel from "@/components/icons/Laravel";
import MongoDB from "@/components/icons/MongoDb";
import { Mysql } from "@/components/icons/Mysql";
import Nestjs from "@/components/icons/Nestjs";
import { NextjsIconDark } from "@/components/icons/nextjsIconDark";
import { Nodejs } from "@/components/icons/nodejs";
import Nuxt from "@/components/icons/Nuxt";
import { OpenAI } from "@/components/icons/OpenAI";
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
import Vuejs from "@/components/icons/Vuejs";
import { Zustand } from "@/components/icons/Zustand";
import Logo from "@/components/logos/Logo";
import LogoEni from "@/components/logos/LogoEni";
import LogoIntsales from "@/components/logos/LogoIntsales";
import LogoMFE from "@/components/logos/LogoMFE";
import LogoOnirtech from "@/components/logos/LogoOnirtech";
import LogoSell2Door from "@/components/logos/LogoSell2Door";

export const PROJECTS = [
  {
    id: "quincaillerie-havana",
    title: "Sales & Inventory Management System – Quincaillerie Havana",
    subtitle: "Internal App",
    description:
      "Internal application designed to optimize sales management and real-time stock tracking within a hardware store.",
    periode: "2022 - 2023",
    logo: <Logo />,
    list: [
      "Real-time inventory tracking and control",
      "Management of sales and stock movements",
      "Modern and ergonomic interface",
      "Integration of smart monitoring",
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
    reference:[
      {
        title: "Github",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/Quincaillerie",
      },
    ],
    images: "/images/havana.webp",
  },
  {
    id: "onirtech-saas-education",
    title: "Educational LMS Platform – ONIRTECH",
    subtitle: "SaaS – Education",
    description:
      "LMS application developed in a professional environment to enhance collaborative learning and content management.",
    periode: "2023 - 2024",
    logo: <LogoOnirtech />,
    list: [
      "Secure authentication system",
      "Optimized state management with Zustand",
      "Collaboration and task tracking via Trello",
      "Modern and responsive design",
    ],
    stacks: [
      {
        title: "React",
        icon: <ReactDark className="h-5 w-5" />,
        href: "https://react.dev",
      },
      {
        title: "Next.js",
        icon: <NextjsIconDark className="h-5 w-5" />,
        href: "https://nextjs.org",
      },
      {
        title: "Node.js",
        icon: <Nodejs className="h-5 w-5" />,
        href: "https://nodejs.org",
      },
      {
        title: "MongoDB",
        icon: <MongoDB className="h-5 w-5" />,
        href: "https://www.mongodb.com",
      },
      {
        title: "Zustand",
        icon: <Zustand className="h-5 w-5" />,
        href: "https://zustand-demo.pmnd.rs",
      },
      {
        title: "Trello",
        icon: <Trello className="h-5 w-5" />,
        href: "https://trello.com",
      },
    ],
     reference:[
      {
        title: "Github",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/GU-OnirTech",
      },
    ],
    images: "/gift/projet-onirtech.webp",
  },
  {
    id: "ministere-economie-carriere",
    title: "Career Management System – Ministry of Economy and Finance",
    subtitle: "Institutional App",
    description:
      "Institutional application for monitoring and managing the career progression of public administration employees.",
    periode: "2021 - 2022",
    logo: <LogoMFE />,
    list: [
      "Real-time tracking of status changes",
      "Management of promotions and career history",
      "Intuitive and accessible interface",
      "Navigation time optimization",
    ],
    stacks: [
      {
        title: "Laravel",
        icon: <Laravel className="h-5 w-5" />,
        href: "https://laravel.com",
      },
      {
        title: "PHP",
        icon: <PHP className="h-5 w-5" />,
        href: "https://www.php.net",
      },
      { title: "Vue.js", icon: <Nuxt />, href: "https://vuejs.org" },
      {
        title: "Oracle Database",
        icon: <Oracle className="h-5 w-5" />,
        href: "https://www.oracle.com/database",
      },
      {
        title: "Tailwind CSS",
        icon: <Tailwindcss className="h-5 w-5" />,
        href: "https://tailwindcss.com",
      },
    ],
    reference:[
      {
        title: "Github",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/O-GECA",
      },
    ],
    images: "/images/ecommerce-login.webp",
    isScale: true,
  },
  {
    id: "saas-b2b-gestion-commerciale",
    title: "Intsales SaaS Multi-Tenant – B2B Commercial Management",
    subtitle: "SaaS – B2B",
    description:
      "Scalable SaaS platform for B2B companies to manage sales and inventory with advanced analytics.",
    periode: "2024",
    logo: <LogoIntsales />,
    list: [
      "Secure multi-tenant architecture",
      "Management of stock and commercial operations",
      "Real-time analytical dashboards",
      "High user load support",
    ],

    stacks: [
      {
        title: "React",
        icon: <ReactDark className="h-5 w-5" />,
        href: "https://react.dev",
      },
      {
        title: "NestJS",
        icon: <Nestjs className="h-5 w-5" />,
        href: "https://nestjs.com",
      },
      {
        title: "PostgreSQL",
        icon: <Postgresql className="h-5 w-5" />,
        href: "https://www.postgresql.org",
      },
      {
        title: "Redis",
        icon: <Redis className="h-5 w-5" />,
        href: "https://redis.io",
      },
      {
        title: "Shadcn/UI",
        icon: <Shadcn className="h-5 w-5" />,
        href: "https://ui.shadcn.com",
      },
    ],
     reference:[
      {
        title: "Frontend Repos",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/baba_saas_frontend",
      },
    ],
    images: "/images/login-intsales.webp",
  },
  {
    id: "ecommerce-platform",
    title: "Complete E-Commerce Platform",
    subtitle: "E-commerce",
    description:
      "Complete e-commerce solution managing products, orders, and payments, focused on performance and user experience.",
    periode: "2023",
    logo: <Logo />,
    list: [
      "Product and order management",
      "Secure payments",
      "Real-time notifications",
      "Optimized state management",
    ],
    stacks: [
      {
        title: "React",
        icon: <ReactDark className="h-5 w-5" />,
        href: "https://react.dev",
      },
      {
        title: "Node.js",
        icon: <Nodejs className="h-5 w-5" />,
        href: "https://nodejs.org",
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
        title: "React Query",
        icon: <ReactQuery className="h-5 w-5" />,
        href: "https://tanstack.com/query",
      },
    ],
     reference:[
      {
        title: "Frontend Github",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/e-commerce ",
      },
       {
        title: "Backend Github",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/e-commerce-api  ",
      },
    ],
    images: "/images/ecommerce.webp",
  },
  {
    id: "agritech-digital-platform",
    title: "Agritech Digital & Payment Platform",
    subtitle: "Digital Platform",
    description:
      "Digital platform facilitating agricultural exchanges, integrating online payments and intelligent recommendations.",
    periode: "2022 - 2023",
    logo: <LogoEni />,
    list: [
      "Digitalization of raw material exchanges",
      "Secure online payments",
      "Stock optimization",
      "Intelligent recommendations",
    ],
    stacks: [
      {
        title: "React",
        icon: <ReactDark className="h-5 w-5" />,
        href: "https://react.dev",
      },
      {
        title: "NestJS",
        icon: <Nestjs className="h-5 w-5" />,
        href: "https://nestjs.com",
      },
      { title: "MySQL", icon: <Mysql />, href: "https://www.mysql.com" },
      { title: "OpenAI", icon: <OpenAI />, href: "https://openai.com" },
    ],
     reference:[
      {
        title: "Backend Repos",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/agriConnect-back ",
      },
    ],
    images: "/images/agro.webp",
    isScale: true,
  },
  {
    id: "sell2door-saas-delivery",
    title: "Sell2Door – Geolocated Delivery SaaS Service",
    subtitle: "Mobile App",
    description:
      "Mobile SaaS application connecting merchants, customers, and delivery agents around an intelligent delivery system.",
    periode: "2021 - 2022",
    logo: <LogoSell2Door />,
    list: [
      "Direct ordering by customers",
      "Sales management for merchants",
      "Assignment of delivery tasks",
      "Geolocated tracking and interactive mapping",
    ],
    stacks: [
      {
        title: "React Native",
        icon: <ReactLight className="h-5 w-5" />,
        href: "https://reactnative.dev",
      },
      {
        title: "NestJS",
        icon: <Nestjs className="h-5 w-5" />,
        href: "https://nestjs.com",
      },
      {
        title: "PostgreSQL",
        icon: <Postgresql className="h-5 w-5" />,
        href: "https://www.postgresql.org",
      },
    ],
    //  reference:[
    //   {
    //     title: "Github",
    //     icon: <GitHubIcons className="h-5 w-5" />,
    //     href: "https://github.com/mahf-TB/GU-OnirTech",
    //   },
    // ],
    images: "/images/mobile-2.webp",
    isMobile: true,
  },
 
  {
    
    id: "residence-universitaire",
    title: "University Residence Management System",
    subtitle: "Management System",
    description:
      "Comprehensive application for university residence management, focused on real-time tracking and ease of use.",
    periode: "2020 - 2021",
    logo: <LogoEni />,
    list: [
      "Occupant management",
      "Room assignment",
      "Rent payment tracking",
      "Clear and intuitive interfaces",
    ],
    stacks: [
      { title: "Vue.js", icon: <Vuejs />, href: "https://vuejs.org" },
      {
        title: "Laravel",
        icon: <Laravel className="h-5 w-5" />,
        href: "https://laravel.com",
      },
      { title: "MySQL", icon: <Mysql />, href: "https://www.mysql.com" },
      {
        title: "Merise",
        icon: <Shadcn />,
        href: "https://fr.wikipedia.org/wiki/Merise",
      },
    ],
     reference:[
      {
        title: "Github",
        icon: <GitHubIcons className="h-5 w-5" />,
        href: "https://github.com/mahf-TB/Gestion-residence-universitaire ",
      },
    ],
    images: "/gift/lodgeIHM.webp",
  },
  {
    id: "saas-uxui-design",
    title: "SaaS Platforms Flow & UX/UI Design – Intsales & Sell2Door",
    subtitle: "UX/UI Design",
    description:
      "UX/UI design of two major SaaS platforms: a geolocated delivery mobile app (Sell2Door) and a B2B commercial management platform (IntSales). Designs focus on performance, clear user flows, and optimal user experience.",
    periode: "2023",
    list: [
      "User needs analysis (B2C, B2B, delivery agents, merchants)",
      "Definition of user flows and business processes",
      "Creation of low & mid-fidelity wireframes",
      "High-fidelity UI mockups",
      "SaaS analytical dashboard design",
      "Reusable UI component implementation",
      "Mobile and desktop ergonomics optimization",
    ],
    logo: <Figma className="h-full w-full" />,
    stacks: [
      {
        title: "Figma",
        icon: <Figma className="h-5 w-5" />,
        href: "https://figma.com",
      },
      {
        title: "React",
        icon: <ReactDark className="h-5 w-5" />,
        href: "https://react.dev",
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
    images: "/images/figma/figma-project.webp",
  },
];
