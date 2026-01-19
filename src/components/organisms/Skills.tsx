import { skills } from "@/constants/profile";
import { Logo } from "../atoms/Logo";

export function Skills() {
	return (
		<div className="w-full h-full overflow-auto custom-scrollbar p-4 md:p-12">
			{skills.map((category) => (
				<div key={category.title} className="w-full max-w-3xl mx-auto p-4">
					<div className="w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
					<h2 className="text-gray-200 text-2xl font-inter text-center">
						{category.title}
					</h2>
					<p className="text-gray-400 text-center mt-2 w-full max-w-xl mx-auto font-mono">
						{category.description}
					</p>
					<div className="flex gap-4 flex-wrap justify-center mt-6">
						{category.items.map((skill) => (
							<Logo
								key={skill.name}
								name={skill.name}
								experience={skill.experience}
								contrast={skill.contrast}
							/>
						))}
					</div>
				</div>
			))}
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
