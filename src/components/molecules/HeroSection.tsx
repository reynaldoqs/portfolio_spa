import { CalendarSearch, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button, TextType } from "@/components/atoms";
import { profile } from "@/constants/profile";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
	className?: string;
};

export function HeroSection({ className }: HeroSectionProps) {
	const handleEmailClick = () => {
		window.location.href = profile.links.email;
	};

	const handleLinkedInClick = () => {
		window.open(profile.links.linkedin, "_blank");
	};

	const handleGithubClick = () => {
		window.open(profile.links.github, "_blank");
	};

	const handleConsultationClick = () => {
		window.open(profile.links.calendly, "_blank");
	};

	return (
		<header
			className={cn(
				"flex flex-col h-full justify-center items-center font-inter",
				className,
			)}
		>
			<img
				src="https://res.cloudinary.com/dtunq8gr3/image/upload/t_aayushfinal/aayush1_tgrcxs"
				alt={`${profile.name} - Software Engineer and Full Stack Developer`}
				className="w-48 h-48 md:w-[280px] md:h-[280px] rounded-full object-cover shadow-xl mb-4"
				loading="eager"
				width={280}
				height={280}
			/>
			<h1 className="text-3xl md:text-4xl text-indigo-400 mt-2 font-bold text-center">
				Hi, I'm {profile.name}
			</h1>

			<div className="flex items-center gap-2 mt-2 text-gray-400">
				<Terminal size={20} className="text-primary" />
				<h2 className="text-xl md:text-2xl font-mono">{profile.title}</h2>
			</div>

			<nav
				className="flex gap-3 mt-4"
				aria-label="Social media and contact links"
			>
				<Button
					variant="outline"
					size="icon"
					aria-label="Send email to {profile.name}"
					onClick={handleEmailClick}
				>
					<Mail className="size-5" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					aria-label="Visit {profile.name}'s LinkedIn profile"
					onClick={handleLinkedInClick}
					data-seo="linkedin-social-link"
				>
					<Linkedin className="size-5" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					aria-label="Visit {profile.name}'s GitHub profile"
					onClick={handleGithubClick}
				>
					<Github className="size-5" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					aria-label="Schedule a meeting with {profile.name}"
					onClick={handleConsultationClick}
				>
					<CalendarSearch className="size-5" />
				</Button>
			</nav>

			<div className="relative mt-6 w-full max-w-lg px-4 h-24">
				<TextType
					text={profile.summary}
					typingSpeed={50}
					pauseDuration={2000}
					showCursor={true}
					cursorCharacter="|"
					className="mx-auto px-2 text-gray-300 font-thin font-mono text-center text-sm md:text-lg leading-relaxed md:leading-loose"
					aria-label="Professional summary"
				/>
			</div>
		</header>
	);
}
