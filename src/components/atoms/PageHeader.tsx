import { X } from "lucide-react";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
	title: string;
	expanded?: boolean;
	onClose?: () => void;
}

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
	({ title, expanded, onClose }, ref) => {
		return (
			<section
				ref={ref}
				className="w-full flex group justify-between h-[34px] bg-gray-900 border-b-gray-700/40 border-b px-3"
			>
				<div className="flex gap-2 items-center flex-1">
					<CircleMenu
						className={expanded ? "group-hover:bg-red-400" : ""}
						onClick={onClose}
					>
						{expanded ? (
							<X
								size={12}
								className="opacity-0 group-hover:opacity-100 text-black/60"
							/>
						) : null}
					</CircleMenu>
					<CircleMenu className={expanded ? "group-hover:bg-amber-400" : ""} />
					<CircleMenu className={expanded ? "group-hover:bg-green-400" : ""} />
				</div>
				<div className="flex-4 flex justify-center items-center font-mono">
					<h2 className="font-medium text-sm text-gray-400">{title}</h2>
				</div>
				<div className="flex-1" />
			</section>
		);
	},
);

PageHeader.displayName = "PageHeader";

interface MacDotProps extends HTMLAttributes<HTMLDivElement> {}

const CircleMenu = ({ className, ...rest }: MacDotProps) => {
	return (
		<div
			className={cn(
				"h-[14px] w-[14px] rounded-full bg-indigo-400/60 place-content-center transition-colors flex items-center justify-center",
				className,
			)}
			{...rest}
		/>
	);
};
