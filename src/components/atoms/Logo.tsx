import { type HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { GlassContainer } from "./GlassContainer";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	experience?: number;
	contrast?: boolean;
	custom?: boolean;
}
export function Logo({
	name,
	experience = 1,
	contrast,
	custom,
	className,
	...rest
}: LogoProps) {
	const [imageError, setImageError] = useState(false);
	const nameInitials = name
		.split(" ")
		.map((n) => n[0])
		.join("");
	const normalizedName = name.replace(" ", "").toLocaleLowerCase();
	const showCustom = custom || imageError;

	return (
		<GlassContainer
			className={cn(
				"py-5 px-2 w-[160px] flex flex-col items-center",
				className,
			)}
			{...rest}
		>
			{!showCustom ? (
				<img
					src={`https://cdn.simpleicons.org/${normalizedName}${contrast ? "/FFFFFF" : ""}`}
					alt={name}
					width={50}
					onError={() => setImageError(true)}
				/>
			) : (
				<div className="size-[50px] bg-gray-300 rounded-lg p-1 font-bold text-xl">
					{nameInitials}
				</div>
			)}

			<h3 className="text-gray-300 font-mono mt-3 text-center">{name}</h3>
			<p className="text-gray-400 text-xs text-center font-inter">
				{experience}+ year{experience > 1 ? "s" : ""}
			</p>
		</GlassContainer>
	);
}
