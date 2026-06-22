import {
    CheckCircle2,
    Code2,
    GitBranch,
    GraduationCap,
    Languages,
    Mail,
    MapPin,
    Phone,
    RotateCcw,
    Zap,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { SiFirebase, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

export const stats = [
    { label: "Year of Engineering", value: "4th" },
    { label: "English Level", value: "B2" },
    { label: "Tech Courses", value: "10+" },
    { label: "Commitment", value: "100%" },
];

export const highlights = [
    { icon: GraduationCap, text: "4th Year Software Engineering" },
    { icon: Languages, text: "English B2 (FCE Certified)" },
    { icon: Code2, text: "React & Next.js Developer" },
    { icon: Zap, text: "Fast Learner & Solution Oriented" },
];

export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "francocarranza144@gmail.com",
        href: "mailto:francocarranza144@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+54 (351) 6959527",
        href: "tel:+543516959527",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Córdoba, Argentina",
        href: "#",
    },
];

export const socialLinks = [
    { icon: FaGithub, href: "https://github.com/FrancoCarranza", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/franco-carranza-852524313/", label: "LinkedIn" },
];

export const experiences = [
    {
        type: "work",
        title: "Software Developer",
        company: "Agentsapp",
        period: "2026 - Present",
        description:
            "Developing and maintaining scalable web applications for an AI-driven startup. Focused on building high-performance interfaces and integrating intelligent agent services.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "AI Integration"],
    },
    {
        type: "work",
        title: "Freelance Web Developer",
        company: "Modo Chatbot (Project)",
        period: "2025",
        description:
            "Designed and developed a responsive web interface for an AI services startup. Managed the end-to-end process from UI prototyping to deployment.",
        technologies: ["React", "CSS3", "Netlify", "Client Relations"],
    },
    {
        type: "education",
        title: "Software Engineering Degree",
        company: "Universidad Siglo 21",
        period: "2023 - Present",
        description:
            "Currently in 4th year (Advanced Student). Focused on Software Quality, Distributed Systems, and Agile Methodologies in Córdoba, Argentina.",
        technologies: ["Software Architecture", "QA", "Agile"],
    },
    {
        type: "education",
        title: "First Certificate in English (FCE)",
        company: "Cambridge University",
        period: "2023",
        description:
            "B2 Upper Intermediate certification. Proficient in technical communication and documentation in English.",
        technologies: ["B2 Level", "Technical English"],
    },
    {
        type: "education",
        title: "Programming Foundations",
        company: "Initial Courses",
        period: "2022 - Present",
        description:
            "Self-paced learning of programming logic, algorithms, and web development fundamentals.",
        technologies: ["React", "Next.js", "JavaScript", "HTML/CSS", "SQL"],
    },
];

export const footerSocialLinks = [
    { icon: FaGithub, href: "https://github.com/FrancoCarranza", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/franco-carranza-852524313/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:francocarranza144@gmail.com", label: "Email" },
];

export const projects = [
    {
        title: "Marchands du Vin",
        description:
            "Front-end redesign of a wine store on Tiendanube. Revamped the existing storefront on the platform, working with Twig templates to modernize the shopping experience.",
        image: "/images/marchands-du-vin.jpeg",
        techStack: ["Tiendanube", "Twig", "HTML/CSS", "JavaScript"],
        demoUrl: "https://www.marchandsduvin.com.ar/",
    },
    {
        title: "Modo Chatbot Interface",
        description:
            "Freelance landing page for an AI service provider. Developed with a focus on responsive UI and custom brand integration.",
        image: "/images/web-chatBot.png",
        techStack: ["React", "JavaScript", "CSS3", "Netlify"],
        demoUrl: "https://chat-bot-25.netlify.app/",
        githubUrl: "https://github.com/FrancoCarranza/Modo-Chatbot-WebSite",
    },
    {
        title: "Engineering Portfolio",
        description:
            "Personal engineering portfolio built to showcase technical skills and projects. Focused on performance and modern UI/UX.",
        image: "/images/imagen.png",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        demoUrl: "https://francocarranza.vercel.app/",
        githubUrl: "https://github.com/FrancoCarranza/portfolio",
    }
];

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML/CSS", icon: SiHtml5 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "MySQL", icon: SiMysql },
            { name: "Firebase (NoSQL)", icon: SiFirebase },
            { name: "Next.js API Routes", icon: Code2 },
        ],
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "Vercel", icon: SiVercel },
            { name: "Agile/Scrum", icon: RotateCcw },
            { name: "Software Quality", icon: CheckCircle2 },
            { name: "Postman", icon: SiPostman },
        ],
    },
];