import { Logo } from "../atoms/Logo";

export function Skills() {
	return (
		<div className="w-full h-full overflow-auto custom-scrollbar p-12">
			<div className="w-full max-w-3xl mx-auto p-4">
				<div className="w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
				<h2 className="text-gray-200 text-2xl font-inter text-center">
					Front-End Development
				</h2>
				<p className="text-gray-400 text-center mt-2 w-full max-w-xl mx-auto font-mono">
					Technologies, tools, and practices I use to build modern, responsive,
					and performant web applications.
				</p>
				<div className="flex gap-4 flex-wrap justify-center mt-6">
					<Logo name="HTML5" experience={8} />
					<Logo name="CSS" experience={8} />
					<Logo name="JavaScript" experience={7} />
					<Logo name="TypeScript" experience={5} />
					<Logo name="React" experience={6} />
					<Logo name="Next.js" experience={3} contrast />
					<Logo name="Redux" experience={3} />
					<Logo name="Zod" experience={3} />
					<Logo name="React Query" experience={3} />
					<Logo name="Tailwind CSS" experience={3} />
					<Logo name="Styled Components" experience={2} />
					<Logo name="MUI" experience={2} />
					<Logo name="Svelte" experience={1} />
					<Logo name="Vue.js" experience={1} />
					<Logo name="Gsap" experience={1} />
					<Logo name="Astro" experience={1} />
					<Logo name="Mobile First" experience={4} custom />
					<Logo name="Pixel Perfect" experience={1} custom />
					<Logo name="Atomic Design" experience={3} custom />
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto p-4">
				<div className="w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
				<h2 className="text-gray-200 text-2xl font-inter text-center">
					Front-End Testing
				</h2>
				<p className="text-gray-400 text-center mt-2 w-full max-w-xl mx-auto font-mono">
					Unit, integration, and end-to-end testing to ensure reliable and
					maintainable user interfaces.
				</p>
				<div className="flex gap-4 flex-wrap justify-center mt-6">
					<Logo name="Storybook" experience={3} />
					<Logo name="Jest" experience={4} />
					<Logo name="Testing Library" experience={4} />
					<Logo name="Cypress" experience={1} />
					<Logo name="Playwright" experience={1} custom />
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto p-4">
				<div className="w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
				<h2 className="text-gray-200 text-2xl font-inter text-center">
					Back-End Development
				</h2>
				<p className="text-gray-400 text-center mt-2 w-full max-w-xl mx-auto font-mono">
					Server-side development focused on APIs, data management, and
					application logic.
				</p>
				<div className="flex gap-4 flex-wrap justify-center mt-6">
					<Logo name="Node.js" experience={3} />
					<Logo name="Express" experience={2} contrast />
					<Logo name="MongoDB" experience={2} />
					<Logo name="PostgreSQL" experience={1} />
					<Logo name="Supabase" experience={1} />
					<Logo name="Firebase" experience={1} />
					<Logo name="RestAPI" experience={5} custom />
					<Logo name="GraphQL" experience={1} />
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto p-4">
				<div className="w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
				<h2 className="text-gray-200 text-2xl font-inter text-center">
					Mobile Development
				</h2>
				<p className="text-gray-400 text-center mt-2 w-full max-w-xl mx-auto font-mono">
					Building cross-platform mobile applications with a focus on
					performance, usability, and code quality.
				</p>
				<div className="flex gap-4 flex-wrap justify-center mt-6">
					<Logo name="React Native" experience={3} custom />
					<Logo name="Flutter" experience={2} />
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto p-4">
				<div className="w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
				<h2 className="text-gray-200 text-2xl font-inter text-center">
					Tools & Workflow
				</h2>
				<p className="text-gray-400 text-center mt-2 w-full max-w-xl mx-auto font-mono">
					Technologies and tools I use to design, build, test, and deploy web
					and mobile applications efficiently.
				</p>
				<div className="flex gap-4 flex-wrap justify-center mt-6">
					<Logo name="Git" experience={8} />
					<Logo name="GitHub" experience={8} contrast />
					<Logo name="GitHub Actions" experience={3} />
					<Logo name="GitLab" experience={1} />
					<Logo name="Figma" experience={2} />
					<Logo name="Docker" experience={2} />
				</div>
			</div>
		</div>
	);
}

export function SkillsPreview() {
	return (
		<div className="w-full h-full p-4 flex flex-col gap-5">
			<div className="h-4 bg-gray-600/40 rounded-full w-2/6 mx-auto" />
			<div className="flex flex-wrap gap-3 px-10 justify-center opacity-40">
				<div className="size-[40px] rounded-lg bg-blue-300" />
				<div className="size-[40px] rounded-lg bg-blue-300" />
				<div className="size-[40px] rounded-lg bg-blue-300" />
				<div className="size-[40px] rounded-lg bg-blue-300" />
				<div className="size-[40px] rounded-lg bg-blue-300" />
			</div>
			<div className="h-4 bg-gray-600/40 rounded-full w-2/5 mx-auto" />
			<div className="flex flex-wrap gap-3 px-12 justify-center opacity-40">
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
				<div className="size-[40px] rounded-lg bg-purple-400" />
			</div>
		</div>
	);
}
