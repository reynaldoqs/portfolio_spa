import { skills } from "@/constants/profile";
import { Logo } from "../atoms/Logo";

export function Skills() {
	return (
		<div className="w-full h-full overflow-auto custom-scrollbar p-0 md:p-12">
			{skills.map((category) => (
				<div key={category.title} className="w-full max-w-3xl mx-auto p-4">
					<div className="w-20 md:w-[100px] h-[3px] bg-gray-700 mt-5 mb-2 mx-auto" />
					<h2 className="text-gray-200 text-xl md:text-2xl font-inter text-center">
						{category.title}
					</h2>
					<p className="text-gray-400 text-sm md:text-base text-center mt-2 w-full max-w-xl mx-auto font-mono px-2">
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
