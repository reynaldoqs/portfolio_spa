import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { stadistics } from "@/constants/profile";
import { cn } from "@/lib/utils";
import { GlassContainer } from "../atoms";

interface StatItemProps {
	value: number;
	label1: string;
	label2: string;
}

function StatItem({ value, label1, label2 }: StatItemProps) {
	const numberRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const element = numberRef.current;
		if (!element) return;

		const obj = { count: 0 };
		gsap.to(obj, {
			count: value,
			duration: 2,
			ease: "power2.out",
			onUpdate: () => {
				if (element) {
					element.textContent = `+${Math.round(obj.count)}`;
					element.setAttribute("aria-valuenow", String(Math.round(obj.count)));
				}
			},
		});
	}, [value]);

	const label = `${label1} ${label2}`.toLowerCase();

	return (
		<GlassContainer className="flex flex-col p-4">
			<div
				ref={numberRef}
				className="text-3xl md:text-5xl font-black text-indigo-200"
				aria-label={`${value} ${label}`}
				aria-valuenow={0}
				aria-valuemin={0}
				aria-valuemax={value}
				role="progressbar"
			>
				+0
			</div>
			<div className="text-xs md:text-sm font-mono text-gray-300 uppercase mt-2">
				{label1}
			</div>
			<div className="text-xs md:text-sm font-mono text-gray-300 uppercase">
				{label2}
			</div>
		</GlassContainer>
	);
}

interface StatisticsProps {
	className?: string;
}

export function Statistics({ className }: StatisticsProps) {
	return (
		<aside
			className={cn("flex flex-col", className)}
			aria-label="Professional statistics and achievements"
		>
			<StatItem
				value={stadistics.experience}
				label1="Years of"
				label2="Experience"
			/>
			<StatItem
				value={stadistics.projects}
				label1="Projects"
				label2="Completed"
			/>
			<StatItem
				value={stadistics.clients}
				label1="Worldwide"
				label2="Clients"
			/>
		</aside>
	);
}
