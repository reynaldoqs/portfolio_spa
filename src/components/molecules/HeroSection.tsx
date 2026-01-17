import { CalendarSearch, Github, Linkedin, Mail } from "lucide-react";
import { Button, TextType } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { SkillsPreview } from "../organisms/Skills";

const summary = [
	"UX-focused full stack and mobile developer with 7+ years of experience building user-friendly products for web and mobile.",
	"Background in graphic design and backend development, helping me connect design ideas with solid engineering.",
	"I enjoy turning UX principles into clean, accessible, and scalable interfaces.",
	"I focus on intuitive UI systems with consistent design, usability, and pixel-perfect details.",
];
type HeroSectionProps = {
	className?: string;
};
export function HeroSection({ className }: HeroSectionProps) {
	return (
		<header
			className={cn(
				"flex flex-col h-full justify-center items-center font-inter",
				className,
			)}
			itemScope
			itemType="https://schema.org/Person"
		>
			<img
				src="https://res.cloudinary.com/dtunq8gr3/image/upload/t_aayushfinal/aayush1_tgrcxs"
				alt="Reynaldo Quispe - Software Engineer and Full Stack Developer"
				className="size-[280px] rounded-full object-cover"
				itemProp="image"
				loading="eager"
				width={280}
				height={280}
			/>
			<h1 className="text-3xl text-gray-50 mt-2 font-bold" itemProp="name">
				Hi, I'm <span itemProp="givenName">Reynaldo</span>{" "}
				<span itemProp="familyName">Quispe</span>
			</h1>

			<p className="text-2xl text-gray-400 mt-1 font-mono" itemProp="jobTitle">
				Software Engineer
			</p>
			<nav
				className="flex gap-3 mt-3"
				aria-label="Social media and contact links"
			>
				<Button
					variant="outline"
					size="icon"
					aria-label="Send email to Reynaldo Quispe"
					onClick={() =>
						(window.location.href = "mailto:your-email@example.com")
					}
				>
					<Mail />
				</Button>
				<Button
					variant="outline"
					size="icon"
					aria-label="Visit Reynaldo Quispe's LinkedIn profile"
					onClick={() =>
						window.open("https://linkedin.com/in/yourprofile", "_blank")
					}
				>
					<Linkedin />
				</Button>
				<Button
					variant="outline"
					size="icon"
					aria-label="Visit Reynaldo Quispe's GitHub profile"
					onClick={() =>
						window.open("https://github.com/yourprofile", "_blank")
					}
				>
					<Github />
				</Button>
				<Button
					variant="outline"
					size="icon"
					aria-label="Schedule a meeting with Reynaldo Quispe"
					onClick={() =>
						window.open("https://calendly.com/yourprofile", "_blank")
					}
				>
					<CalendarSearch />
				</Button>
			</nav>

			<div className="relative mt-4 min-w-lg">
				<TextType
					text={summary}
					typingSpeed={75}
					pauseDuration={1500}
					showCursor={true}
					cursorCharacter="|"
					className="absolute max-w-lg text-gray-300 font-thin font-montserrat text-center"
					aria-label="Professional summary"
				/>
			</div>
		</header>
	);
}
