import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const GlassContainer = React.forwardRef<HTMLDivElement, GlassContainerProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"backdrop-blur-sm border border-gray-500/10 rounded-2xl bg-gray-600/10",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
GlassContainer.displayName = "GlassContainer";

export { GlassContainer };
