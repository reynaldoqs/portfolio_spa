// import { forwardRef } from "react";
// import { cn } from "@/lib/utils";
// import { PageHeader } from "../atoms";

// export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
// 	expanded?: boolean;
// 	title: string;
// 	onClose: () => void;
// 	children: React.ReactNode;
// }

// export const ContentPage = forwardRef<HTMLDivElement, CardProps>(
// 	({ className, expanded, title, onClose, ...rest }, ref) => {
// 		return (
// 			<div
// 				ref={ref}
// 				{...rest}
// 				className={cn(
// 					"absolute transform-3d will-change-transform backface-hidden",
// 					"bg-gray-900 size-full rounded-xl overflow-hidden border border-gray-700/40",
// 					className,
// 				)}
// 			>
// 				<PageHeader expanded={expanded} title={title} onClose={onClose} />
// 			</div>
// 		);
// 	},
// );
