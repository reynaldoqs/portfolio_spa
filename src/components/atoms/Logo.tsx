import { type HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { GlassContainer } from "./GlassContainer";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	experience?: number;
	contrast?: boolean;
}
export function Logo({
	name,
	experience = 1,
	contrast,
	className,
	...rest
}: LogoProps) {
	const [imageError, setImageError] = useState(false);
	const nameInitials = name
		.split(" ")
		.map((n) => n[0])
		.join("");
	const normalizedName = name.replace(" ", "").toLocaleLowerCase();
	const showCustom = imageError;

	return (
		<GlassContainer
			className={cn(
				"py-4 md:py-5 px-2 w-[120px] md:w-[160px] flex flex-col items-center transition-all duration-300",
				className,
			)}
			{...rest}
		>
			{!showCustom ? (
				<img
					src={`https://cdn.simpleicons.org/${normalizedName}${contrast ? "/FFFFFF" : ""}`}
					alt={name}
					className="w-10 h-10 md:w-[50px] md:h-[50px] object-contain"
					onError={() => setImageError(true)}
				/>
			) : (
				<div className="w-10 h-10 md:w-[50px] md:h-[50px] bg-gray-300 rounded-lg p-1 flex items-center justify-center font-bold text-lg md:text-xl text-black">
					{nameInitials}
				</div>
			)}

			<h3 className="text-gray-300 font-mono mt-2 md:mt-3 text-center text-xs md:text-base leading-tight">
				{name}
			</h3>
			<p className="text-gray-400 text-[10px] md:text-xs text-center font-inter mt-1">
				{experience}+ year{experience > 1 ? "s" : ""}
			</p>
		</GlassContainer>
	);
}
