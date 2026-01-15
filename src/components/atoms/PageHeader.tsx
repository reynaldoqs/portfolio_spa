import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
	title: string;
}

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
	({ title }, ref) => {
		return (
			<section
				ref={ref}
				className="w-full flex justify-between h-[34px] bg-gray-900 border-b-gray-700/40 border-b px-3"
			>
				<div className="flex gap-2 items-center flex-1">
					<CircleMenu className="bg-red-400" />
					<CircleMenu className="bg-amber-400" />
					<CircleMenu className="bg-green-400" />
				</div>
				<div className="flex-4 flex justify-center items-center">
					<h2 className="font-medium text-sm text-gray-400">{title}</h2>
				</div>
				<div className="flex-1" />
			</section>
		);
	},
);

PageHeader.displayName = "PageHeader";

interface MacDotProps extends HTMLAttributes<HTMLDivElement> {
	expanded?: boolean;
}

const CircleMenu = forwardRef<HTMLDivElement, MacDotProps>(
	({ expanded, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("h-[14px] w-[14px] rounded-full", className)}
				{...rest}
			/>
		);
	},
);

CircleMenu.displayName = "CircleMenu";
