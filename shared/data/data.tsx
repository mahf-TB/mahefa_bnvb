import { Docker } from "../components/icons/Docker";
import { Elementor } from "../components/icons/Elementor";
import { Expressjs } from "../components/icons/Expressjs";
import { GitHubIcons } from "../components/icons/GitHubIcons";
import { Java } from "../components/icons/java";
import Laravel from "../components/icons/Laravel";
import MongoDB from "../components/icons/MongoDb";
import Nestjs from "../components/icons/Nestjs";
import { NextjsIconDark } from "../components/icons/nextjsIconDark";
import { Nodejs } from "../components/icons/nodejs";
import Nuxt from "../components/icons/Nuxt";
import { OpenCV } from "../components/icons/OpenCV";
import { Oracle } from "../components/icons/Oracle";
import PHP from "../components/icons/PHP";
import { Postgresql } from "../components/icons/postgresql";
import { Python } from "../components/icons/python";
import { ReactDark } from "../components/icons/reactDark";
import { ReactLight } from "../components/icons/reactLight";
import { ReactQuery } from "../components/icons/ReactQuery";
import { Redis } from "../components/icons/Redis";
import { Shadcn } from "../components/icons/shadcn";
import { Tailwindcss } from "../components/icons/Tailwindcss";
import { Typescript } from "../components/icons/typescript";
import { Woocommerce } from "../components/icons/Woocommerce";
import { WordPress } from "../components/icons/Wordpress";
import { Zustand } from "../components/icons/Zustand";

export const DATA = {
  shortName: "Mahefa Bnvb",
  name: "ANDRIMAHEFA Bienvenu",
  role: "🚀 Software Engineer | Building APIs & Scalable SaaS Projects",
  location: "Madagascar",
  cvpdf:"/pdf/Fullstack-CV-ANDRIMAHEFA.pdf",
  photo:"/images/profile.webp",
  shortDescription:
    "Full-Stack developer focused on product, designing reliable, performant, and scalable web and mobile applications.",
  description:
    "I design custom software solutions: high-performance, secure, and scalable web and mobile applications, with a strong focus on user experience and business value.",
  highlights: [
    "Design and development of SaaS solutions (B2B & B2C)",
    "High-performance cross-platform web and mobile applications",
    "Clean, modular, and scalable architecture",
    "Focus on business value and user experience",
    "Autonomy, rigor, and attention to detail",
  ],
  availability: "Open to freelance opportunities and SaaS projects",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Nest.js", icon: Nestjs },
    { name: "Shadcn/ui", icon: Shadcn },
    { name: "GitHub", icon: GitHubIcons },
    { name: "Python", icon: Python },
    { name: "TailwindCss", icon: Tailwindcss },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "MongoDB", icon: MongoDB },
    { name: "Java", icon: Java },
    { name: "Laravel", icon: Laravel },
    { name: "PHP", icon: PHP },
    { name: "Zustand", icon: Zustand },
    { name: "React Query", icon: ReactQuery },
    { name: "Redis", icon: Redis },
  ],
  experiences: [
    {
      title: "Software Engineer - iRevs",
      dates: "May 2026 – Present",
      location: "Tallinn, Estonia",
      link: "https://www.irevs.co",
      description:
        "Design, development, and maintenance of full-stack digital platforms across frontend, backend, CMS, and DevOps. Built a containerized payment orchestration platform for card and crypto transactions with intelligent multi-provider routing, hosted checkout, back-office tooling, hexagonal architecture, and asynchronous processing. Also developed a B2B prospecting automation agent for lead collection, enrichment, ICP qualification, personalized message generation, and automatic CRM synchronization.",
      image: "/images/logo-irevs.jpeg",
      links: [
        {
          title: "Next.js",
          icon: <NextjsIconDark className="h-4 w-4" />,
          href: "https://nextjs.org",
        },
        {
          title: "TypeScript",
          icon: <Typescript className="h-4 w-4" />,
          href: "https://www.typescriptlang.org",
        },
        {
          title: "NestJS",
          icon: <Nestjs className="h-4 w-4" />,
          href: "https://nestjs.com",
        },
        {
          title: "React",
          icon: <ReactDark className="h-4 w-4" />,
          href: "https://react.dev",
        },
        {
          title: "Turborepo",
          href: "https://turborepo.com",
        },
        {
          title: "PostgreSQL",
          icon: <Postgresql className="h-4 w-4" />,
          href: "https://www.postgresql.org",
        },
        {
          title: "Redis",
          icon: <Redis className="h-4 w-4" />,
          href: "https://redis.io",
        },
        {
          title: "Prisma",
          href: "https://www.prisma.io",
        },
        {
          title: "RabbitMQ",
          href: "https://www.rabbitmq.com",
        },
        {
          title: "OpenBao",
          href: "https://openbao.org",
        },
        {
          title: "Docker",
          icon: <Docker className="h-4 w-4" />,
          href: "https://www.docker.com",
        },
        {
          title: "OpenAI",
          href: "https://openai.com",
        },
        {
          title: "CI/CD",
          icon: <GitHubIcons className="h-4 w-4" />,
          href: "https://docs.github.com/actions",
        },
        {
          title: "OAuth 2.0",
          href: "https://oauth.net/2/",
        },
        {
          title: "Nginx",
          href: "https://nginx.org",
        },
        {
          title: "Ubuntu Server",
          href: "https://ubuntu.com/server",
        },
      ],
    },
    {
      title: "Freelance WordPress Developer – AlteraPlus",
      dates: "August 2025",
      location: "Freelance Project – E-commerce & Training Platform",
      link: "https://alteraplus.com/",
      description:
        "Designed and developed AlteraPlus, an e-commerce platform for a professional coach offering trainings for individuals (B2C) and companies (B2B). The site integrates course sales, contact management, automated email campaigns, and a blog section for educational content. Implemented optimized sales funnels and automated communication systems to improve conversion and retention.",
      image: "/images/1.webp",
      links: [
        {
          title: "WordPress",
          icon: <WordPress className="h-4 w-4" />,
          href: "https://wordpress.org",
        },
        {
          title: "WooCommerce",
          icon: <Woocommerce className="h-4 w-4" />,
          href: "https://woocommerce.com",
        },
        {
          title: "Elementor",
          icon: <Elementor className="h-4 w-4" />,
          href: "https://elementor.com",
        },
        {
          title: "PHP",
          icon: <PHP className="h-4 w-4" />,
          href: "https://www.php.net",
        },
        { title: "Email Marketing", href: "https://mailchimp.com" },
      ],
    },
    {
      title: "Freelance Full-Stack Developer – Quincaillerie Havana",
      dates: "January 2025 – July 2025",
      location: "Internal Professional Project",
      description:
        "Developed an internal application for tracking and managing sales and inventory, enabling real-time stock control. Implemented a modern interface and smart monitoring system to improve reliability and operational performance.",
      image: "/images/vite.svg",
      links: [
        {
          title: "React",
          icon: <ReactDark className="h-4 w-4" />,
          href: "https://react.dev",
        },
        {
          title: "Express.js",
          icon: <Expressjs className="h-4 w-4" />,
          href: "https://expressjs.com",
        },
        {
          title: "MongoDB",
          icon: <MongoDB className="h-4 w-4" />,
          href: "https://www.mongodb.com",
        },
        {
          title: "OpenCV",
          icon: <OpenCV className="h-4 w-4" />,
          href: "https://opencv.org",
        },
        {
          title: "Tailwind CSS",
          icon: <Tailwindcss className="h-4 w-4" />,
          href: "https://tailwindcss.com",
        },
        {
          title: "Shadcn/UI",
          icon: <Shadcn className="h-4 w-4" />,
          href: "https://ui.shadcn.com",
        },
      ],
    },
    {
      title: "Full-Stack Developer Intern – ONIRTECH",
      dates: "August 2024 – December 2024",
      location: "Professional Internship",
      description:
        "Developed a complete educational SaaS application with authentication, optimized state management, and real-time collaboration. Integrated Trello for task tracking and significantly improved user experience with modern responsive design.",
      image: "/images/onirtech.webp",
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
        {
          title: "Zustand",
          icon: <Zustand className="h-4 w-4" />,
          href: "https://zustand-demo.pmnd.rs",
        },
        {
          title: "Shadcn/UI",
          icon: <Shadcn className="h-4 w-4" />,
          href: "https://ui.shadcn.com",
        },
      ],
    },
    {
      title: "Full-Stack Developer – Ministry of Economy and Finance",
      dates: "August 2023 – February 2024",
      location: "Public Administration",
      description:
        "Designed and developed an application to track and manage employee career progression, providing real-time access to status changes and promotions. Intuitive interface significantly reduced navigation time.",
      image: "/images/mfe.png",
      links: [
        {
          title: "Laravel",
          icon: <Laravel className="h-4 w-4" />,
          href: "https://laravel.com",
        },
        {
          title: "PHP",
          icon: <PHP className="h-4 w-4" />,
          href: "https://www.php.net",
        },
        {
          title: "Vue.js",
          icon: <Nuxt className="h-4 w-4" />,
          href: "https://vuejs.org",
        },
        {
          title: "Oracle Database",
          icon: <Oracle className="h-4 w-4" />,
          href: "https://www.oracle.com/database",
        },
        {
          title: "Tailwind CSS",
          icon: <Tailwindcss className="h-4 w-4" />,
          href: "https://tailwindcss.com",
        },
      ],
    },
  ],
  education: [
    {
      school: "National School of Computer Science (ENI)",
      href: "https://eni.mg",
      degree: "Master 2 in Computer Science – Software Engineering & Databases",
      location: "Fianarantsoa, Madagascar",
      logoUrl:
        "https://eni.mg/wp-content/uploads/2023/12/cropped-cropped-ENI_logo-removebg-preview-1-57x57.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "National School of Computer Science (ENI)",
      href: "https://eni.mg",
      degree: "Professional bachelor’s degree in Computer Science – Software Engineering & Databases",
      location: "Fianarantsoa, Madagascar",
      logoUrl:
        "https://eni.mg/wp-content/uploads/2023/12/cropped-cropped-ENI_logo-removebg-preview-1-57x57.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "AMJ High School Ambalavao",
      href: "#",
      degree: "Baccalaureate C Stream",
      location: "Ambalavao, Fianarantsoa, Madagascar",
      logoUrl: "",
      start: "2021",
      end: "2021",
    },
  ],
};
