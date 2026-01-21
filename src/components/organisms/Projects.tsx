import { projects } from "@/constants/profile";
import { ProjectCard } from "../molecules";

export function Projects() {
	return (
		<div className="w-full h-full flex flex-col p-4 md:p-6 overflow-auto custom-scrollbar">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-10">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						rol={project.rol}
						image={project.image}
						description={project.description}
						technologies={project.technologies}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
}
