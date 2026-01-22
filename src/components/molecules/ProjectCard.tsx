import { Github, Globe, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, GlassContainer } from "../atoms";

interface ProjectCardProps {
	category?: string;
	title: string;
	image: string;
	rol: string;
	description: string;
	technologies: string[];
	link: string;
	github?: string;
}

export function ProjectCard({
	category = "Web App",
	title,
	image,
	rol,
	description,
	technologies,
	link,
	github,
}: ProjectCardProps) {
	return (
		<GlassContainer className="group flex flex-col gap-4 p-5 h-full">
			<div className="relative overflow-hidden rounded-xl bg-gray-900/50">
				<img
					src={image}
					className={cn(
						"w-full aspect-video",
						category === "Web App" ? "object-cover" : "object-contain",
					)}
					alt={title}
				/>
			</div>

			<div className="flex flex-col flex-1 gap-6">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-bold tracking-tight text-white">
							{title}
						</h2>
						{github && (
							<a
								href={github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="View Source"
							>
								<Github className="size-5" />
							</a>
						)}
					</div>

					<div className="flex items-center gap-2 text-sm text-gray-400">
						<Layers className="size-4" />
						<span>{rol}</span>
					</div>
				</div>

				<p className="text-sm leading-relaxed text-gray-300/90 line-clamp-3">
					{description}
				</p>

				<div className="flex flex-wrap gap-2 mt-auto pt-2">
					{technologies.map((tech) => (
						<Badge
							key={tech}
							variant="secondary"
							className="bg-white/5 text-white/90 hover:bg-white/10 transition-colors"
						>
							{tech}
						</Badge>
					))}
				</div>

				<div className="pt-2">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all active:scale-[0.98]"
					>
						<Globe className="size-4" />
						View Project
					</a>
				</div>
			</div>
		</GlassContainer>
	);
}
