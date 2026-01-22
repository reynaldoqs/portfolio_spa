import camex from "@/assets/images/camexbolivia.com.bo_.png";
import cciapp from "@/assets/images/cci_mobile_app.webp";
import cci from "@/assets/images/dev.cci-non-prod.link_.png";
import pawfinder from "@/assets/images/paw-finder-gold.vercel.app_.png";
import portfolio from "@/assets/images/portfolio.png";
import sywapp from "@/assets/images/shopyourway_mobile_app.webp";
import vecinosapp from "@/assets/images/vecinos_mobile_app.webp";
import builtout from "@/assets/images/www.buildout.com_.png";
import vecinos from "@/assets/images/www.vecinos.com_.png";

export const stadistics = {
	projects: 23,
	experience: 7,
	clients: 17,
};

export const profile = {
	name: "Reynaldo Quispe",
	title: "Software Engineer",
	summary: [
		"UX-focused full stack and mobile developer with 7+ years of experience building user-friendly products for web and mobile.",
		"Background in graphic design and backend development, helping me connect design ideas with solid engineering.",
		"I enjoy turning UX principles into clean, accessible, and scalable interfaces.",
		"I focus on intuitive UI systems with consistent design, usability, and pixel-perfect details.",
	],
	links: {
		email: "reynaldoqs@gmail.com",
		linkedin: "https://www.linkedin.com/in/reynaldoqs/",
		github: "https://github.com/reynaldoqs",
		calendly: "https://calendly.com/reynaldoqs/30min",
	},
};

export const skills = [
	{
		title: "Front-End Development",
		description:
			"Technologies, tools, and practices I use to build modern, responsive, and performant web applications.",
		items: [
			{ name: "HTML5", experience: 8 },
			{ name: "CSS", experience: 8 },
			{ name: "JavaScript", experience: 7 },
			{ name: "TypeScript", experience: 5 },
			{ name: "React", experience: 6 },
			{ name: "Next.js", experience: 3, contrast: true },
			{ name: "Redux", experience: 3 },
			{ name: "Zod", experience: 3 },
			{ name: "React Query", experience: 3 },
			{ name: "Tailwind CSS", experience: 3 },
			{ name: "Styled Components", experience: 2 },
			{ name: "MUI", experience: 2 },
			{ name: "Svelte", experience: 1 },
			{ name: "Vue.js", experience: 1 },
			{ name: "Gsap", experience: 1 },
			{ name: "Astro", experience: 1 },
			{ name: "Mobile First", experience: 4 },
			{ name: "Pixel Perfect", experience: 1 },
			{ name: "Atomic Design", experience: 3 },
		],
	},
	{
		title: "Front-End Testing",
		description:
			"Unit, integration, and end-to-end testing to ensure reliable and maintainable user interfaces.",
		items: [
			{ name: "Storybook", experience: 3 },
			{ name: "Jest", experience: 4 },
			{ name: "Testing Library", experience: 4 },
			{ name: "Cypress", experience: 1 },
			{ name: "Playwright", experience: 1 },
		],
	},
	{
		title: "Back-End Development",
		description:
			"Server-side development focused on APIs, data management, and application logic.",
		items: [
			{ name: "Node.js", experience: 3 },
			{ name: "Express", experience: 2, contrast: true },
			{ name: "MongoDB", experience: 2 },
			{ name: "PostgreSQL", experience: 1 },
			{ name: "Supabase", experience: 1 },
			{ name: "Firebase", experience: 1 },
			{ name: "RestAPI", experience: 5 },
			{ name: "GraphQL", experience: 1 },
		],
	},
	{
		title: "Mobile Development",
		description:
			"Building cross-platform mobile applications with a focus on performance, usability, and code quality.",
		items: [
			{ name: "React Native", experience: 3 },
			{ name: "Flutter", experience: 2 },
		],
	},
	{
		title: "Tools & Workflow",
		description:
			"Technologies and tools I use to design, build, test, and deploy web and mobile applications efficiently.",
		items: [
			{ name: "Git", experience: 8 },
			{ name: "GitHub", experience: 8, contrast: true },
			{ name: "GitHub Actions", experience: 3 },
			{ name: "GitLab", experience: 1 },
			{ name: "Figma", experience: 2 },
			{ name: "Docker", experience: 2 },
		],
	},
];

export const projects = [
	{
		title: "Portfolio",
		rol: "FullStack Developer",
		category: "Web App",
		image: portfolio,
		description:
			"This is my portfolio website, where I showcase my work and skills as a software engineer.",
		technologies: ["React", "TypeScript", "GSAP", "Tailwind CSS"],
		link: "https://reynaldoqs.github.io/portfolio_spa",
		github: "https://github.com/reynaldoqs/portfolio_spa",
	},
	{
		title: "Paw finder",
		rol: "FullStack DEveloper",
		image: pawfinder,
		description:
			"PawFinder is a web application designed to help reunite lost pets with their owners. The platform uses image embeddings to analyze and compare pet photos, enabling accurate matching between lost and found pets based on visual similarity. Built with a modern web stack, PawFinder allows users to upload pet images, search for potential matches, and quickly identify similar pets using AI-powered image similarity.",
		technologies: [
			"React",
			"NextJS",
			"SchadCN",
			"Supabase",
			"ChatGPT SDK",
			"Embedings",
			"TailwindCSS",
			"Zod",
			"RHF",
		],
		link: "https://paw-finder-gold.vercel.app/",
		github: "https://github.com/reynaldoqs/paw-finder",
	},
	{
		title: "CCI Web Dashboard",
		rol: "FrontEnd Developer",
		category: "Web App",
		image: cci,
		description:
			"CCI is a financial investing platform from CCI Puesto de Bolsa, S.A. that lets users open and manage investment accounts, monitor their portfolio performance in real time, view transaction history, and track the value and composition of their financial assets through a secure mobile and digital interface.",
		technologies: [
			"React",
			"TypeScript",
			"Redux",
			"RestAPI",
			"GraphQL",
			"Auth0",
			"UXCam",
			"DataDog",
			"Material UI",
			"SSE",
			"React Query",
			"Zod",
			"React Hook Form",
			"Storybook",
			"Jest",
			"Testing Library",
			"Playwright",
		],
		link: "https://dev.cci-non-prod.link/",
	},
	{
		title: "CCI mobile App",
		rol: "Mobile Developer",
		category: "Mobile App",
		image: cciapp,
		description:
			"CCI is a financial investing platform from CCI Puesto de Bolsa, S.A. that lets users open and manage investment accounts, monitor their portfolio performance in real time, view transaction history, and track the value and composition of their financial assets through a secure mobile and digital interface.",
		technologies: [
			"React Native",
			"TypeScript",
			"Redux",
			"RestAPI",
			"GraphQL",
			"Auth0",
			"UXCam",
			"DataDog",
		],
		link: "https://play.google.com/store/apps/details?id=com.ccimobile",
	},
	{
		title: "Shop Your Way",
		rol: "Mobile Developer",
		category: "Mobile App",
		image: sywapp,
		description:
			"Shop Your Way is an online shopping and rewards platform where members earn points on purchases, redeem them for discounts and products, and access personalized deals and partner offers across a wide network of retailers.",
		technologies: [
			"React Native",
			"TypeScript",
			"Redux",
			"RestAPI",
			"StoryBook",
		],
		link: "https://play.google.com/store/apps/details?id=com.sears.shopyourway&hl=en",
	},
	{
		title: "Vecinos App",
		rol: "Mobile Developer",
		category: "Mobile App",
		image: vecinosapp,
		description:
			"Vecinos is a platform that connects neighbors with each other and with local businesses.",
		technologies: [
			"React Native",
			"TypeScript",
			"Styled Components",
			"Redux",
			"React Query",
			"Zod",
			"Pendo",
		],
		link: "https://play.google.com/store/apps/details?id=com.vecinosui",
	},
	{
		title: "Vecinos Landing Page",
		rol: "FrontEnd Developer",
		category: "Web App",
		image: vecinos,
		description:
			"Vecinos is a platform that connects neighbors with each other and with local businesses.",
		technologies: ["React", "TypeScript", "Styled Components", "Vite"],
		link: "https://www.vecinos.com/",
	},
	{
		title: "Biuldout",
		rol: "FullStack Developer",
		category: "Web App",
		image: builtout,
		description:
			"Buildout is a commercial real estate software platform that helps brokers manage listings, marketing, CRM, and deal workflows in a single, integrated system.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind",
			"Ruby on Rails",
			"PostgreSQL",
			"RestAPI",
			"GraphQL",
		],
		link: "https://www.buildout.com/",
	},
	{
		title: "Camex Bolivia",
		rol: "Intern",
		category: "Web App",
		image: camex,
		description:
			"Camex Bolivia is a logistics company that is dedicated to driving the growth and expansion of businesses internationally for goods and materials.",
		technologies: ["Wordpress", "HTML", "CSS", "JavaScript"],
		link: "https://camexbolivia.com.bo/",
	},
];
