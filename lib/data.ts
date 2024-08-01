import yummy from "@/public/yummy.png";
import fastway from "@/public/fastway.png";
import adminPanel from "@/public/admin-panel.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Yummy",
    description:
      "An online food ordering app built with the T3 Stack, featuring authentication and payment integration. Supports multiple languages Arabic and English. It includes a robust admin panel for managing users, orders, categories, and products.",
    tags: [
      "Next.js",
      "Typescript",
      "TRPC",
      "Prisma",
      "Neon db",
      "NextAuth",
      "Stripe",
      "Tailwind",
      "Chadcn UI",
      "React Query",
      "React Hook Form",
      "Zod",
      "Zustand",
      "next-intl",
      "Framer Motion",
      "Responsive Design",
    ],
    imageUrl: yummy,
    sourceUrl: "https://github.com/Maahmoud-Elsayed/Yummy-online-food",
    liveUrl: "https://yummyfoods.vercel.app",
  },
  {
    title: "Fastway",
    description:
      "An eCommerce platform designed for seamless shopping experiences. Built with modern web technologies, it offers secure user authentication, diverse product listings, and a user-friendly interface for managing orders, inventory, and customer interactions.",
    tags: [
      "React.js",
      "Redux Toolkit",
      "Formik",
      "Tailwind",
      "Yup",
      "Firebase",
      "Responsive Design",
    ],
    imageUrl: fastway,
    sourceUrl: "https://github.com/Maahmoud-Elsayed/Fastway-eCommerce",
    liveUrl: "https://fast-way-913c7.web.app",
  },
  {
    title: "Admin-Dashboard",
    description: "Admin Panel Dashboard with dark and light mode",
    tags: [
      "React.js",
      "Material UI",
      "Tailwind",
      "React hook form",
      "typescript",
      "zod",
      "charts",
      "responsive design",
    ],
    imageUrl: adminPanel,
    sourceUrl: "https://github.com/Maahmoud-Elsayed/Admin-Dashboard",
    liveUrl: "https://admin-x-panel.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Material UI",
  "SASS",
  "ES6",
  "Responsive Design",
  "Redux",
  "React Query",
  "Framer Motion",
  "Jest",
] as const;
