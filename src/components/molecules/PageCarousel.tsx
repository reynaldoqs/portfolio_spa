/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: its library*/
/** biome-ignore-all lint/suspicious/noArrayIndexKey: library */
/** biome-ignore-all lint/suspicious/noExplicitAny: <library> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: its library*/
/** biome-ignore-all lint/a11y/noStaticElementInteractions: its library*/
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: its library*/
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import React, {
	Children,
	cloneElement,
	isValidElement,
	type ReactElement,
	type RefObject,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { PageHeader } from "../atoms";

export interface PageCarouselProps {
	width?: number | string;
	height?: number | string;
	cardDistance?: number;
	verticalDistance?: number;
	delay?: number;
	pauseOnHover?: boolean;
	onCardClick?: (idx: number) => void;
	skewAmount?: number;
	easing?: "linear" | "elastic";
	children: React.ReactNode;
}

type PageRef = RefObject<HTMLDivElement | null>;
interface Slot {
	x: number;
	y: number;
	z: number;
	zIndex: number;
}

const makeSlot = (
	i: number,
	distX: number,
	distY: number,
	total: number,
): Slot => ({
	x: i * distX,
	y: -i * distY,
	z: -i * distX * 1.5,
	zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
	gsap.set(el, {
		x: slot.x,
		y: slot.y,
		z: slot.z,
		xPercent: -50,
		yPercent: -50,
		skewY: skew,
		transformOrigin: "center center",
		zIndex: slot.zIndex,
		force3D: true,
	});

gsap.registerPlugin(Flip);

export const PageCarousel: React.FC<PageCarouselProps> = ({
	width = 400,
	height = 300,
	cardDistance = 60,
	verticalDistance = 70,
	delay = 5000,
	pauseOnHover = false,
	onCardClick,
	skewAmount = 6,
	easing = "elastic",
	children,
}) => {
	// Optimization: Memoize config to avoid recalculation
	const config = useMemo(
		() =>
			easing === "elastic"
				? {
						ease: "elastic.out(0.6,0.9)",
						durDrop: 2,
						durMove: 2,
						durReturn: 2,
						promoteOverlap: 0.9,
						returnDelay: 0.05,
					}
				: {
						ease: "power1.inOut",
						durDrop: 0.8,
						durMove: 0.8,
						durReturn: 0.8,
						promoteOverlap: 0.45,
						returnDelay: 0.2,
					},
		[easing],
	);

	const childArr = useMemo(
		() => Children.toArray(children) as ReactElement<PageContentProps>[],
		[children],
	);

	// Stable refs array
	const refs = useMemo<PageRef[]>(
		() => childArr.map(() => React.createRef<HTMLDivElement>()),
		[childArr.length],
	);

	const order = useRef<number[]>(
		Array.from({ length: childArr.length }, (_, i) => i),
	);

	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const intervalRef = useRef<number>(0);
	const container = useRef<HTMLDivElement>(null);

	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
	const flipState = useRef<Flip.FlipState | null>(null);

	// Refs for accessing state inside intervals/events without effect re-runs
	const expandedIndexRef = useRef(expandedIndex);
	const isPausedRef = useRef(false);

	// Keep ref in sync
	useEffect(() => {
		expandedIndexRef.current = expandedIndex;
	}, [expandedIndex]);

	// Cleanup helper
	const cleanupInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = 0;
		}
	};

	// CORE LOGIC: Initial Placement & Carousel Loop
	// Only re-runs if core config changes, NOT on expansion/hover
	useEffect(() => {
		const total = refs.length;

		// Initial Place
		refs.forEach(
			(r, i) =>
				r.current &&
				placeNow(
					r.current,
					makeSlot(i, cardDistance, verticalDistance, total),
					skewAmount,
				),
		);

		const swap = () => {
			// Check if we should skip swap (expanded or paused explicitly)
			if (expandedIndexRef.current !== null || isPausedRef.current) return;

			if (order.current.length < 2) return;

			const [front, ...rest] = order.current;
			const elFront = refs[front]?.current;
			if (!elFront) return;

			const tl = gsap.timeline();
			tlRef.current = tl;

			tl.to(elFront, {
				y: "+=500",
				duration: config.durDrop,
				ease: config.ease,
			});

			tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
			rest.forEach((idx, i) => {
				const el = refs[idx].current;
				if (!el) return;

				const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
				tl.set(el, { zIndex: slot.zIndex }, "promote");
				tl.to(
					el,
					{
						x: slot.x,
						y: slot.y,
						z: slot.z,
						duration: config.durMove,
						ease: config.ease,
					},
					`promote+=${i * 0.15}`,
				);
			});

			const backSlot = makeSlot(
				refs.length - 1,
				cardDistance,
				verticalDistance,
				refs.length,
			);
			tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
			tl.call(
				() => {
					gsap.set(elFront, { zIndex: backSlot.zIndex });
				},
				undefined,
				"return",
			);
			tl.to(
				elFront,
				{
					x: backSlot.x,
					y: backSlot.y,
					z: backSlot.z,
					duration: config.durReturn,
					ease: config.ease,
				},
				"return",
			);

			tl.call(() => {
				order.current = [...rest, front];
			});
		};

		// Start Loop∏
		cleanupInterval();
		intervalRef.current = window.setInterval(swap, delay);

		return () => {
			cleanupInterval();
			tlRef.current?.kill();
		};
	}, [
		cardDistance,
		verticalDistance,
		delay,
		skewAmount,
		config, // dependency on stable config
		// Removed: expandedIndex, pauseOnHover (handled via refs/separate effect)
	]);

	// EVENT LOGIC: Pause on Hover
	// Separated to prevent restarting the interval loop on hover
	useEffect(() => {
		if (!pauseOnHover) return;

		const node = container.current;
		if (!node) return;

		const handleMouseEnter = () => {
			isPausedRef.current = true;
			tlRef.current?.pause();
		};

		const handleMouseLeave = () => {
			// Always clear pause flag when mouse leaves
			isPausedRef.current = false;

			// Only resume timeline if not expanded (if expanded, it stays paused until closed)
			if (expandedIndexRef.current === null) {
				tlRef.current?.play();
			}
		};

		node.addEventListener("mouseenter", handleMouseEnter);
		node.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			node.removeEventListener("mouseenter", handleMouseEnter);
			node.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [pauseOnHover]);

	// Pause immediately if expanded changes
	useEffect(() => {
		if (expandedIndex !== null) {
			// Expanded: Pause everything
			tlRef.current?.pause();
			// We don't clear interval, the swap function checks the ref
		} else {
			// Closed: Resume if not hovered (or if we don't care about hover)
			// But wait, if we are hovered and just closed, we should stay paused?
			// Simple logic: If we just closed, try to resume. The swapping logic checks isPausedRef.
			// But we need to un-pause the timeline if it was paused.
			if (!isPausedRef.current) {
				tlRef.current?.play();
			}
		}
	}, [expandedIndex]);

	// Flip Animation Effect
	React.useLayoutEffect(() => {
		if (!flipState.current) return;

		// Expanding
		if (expandedIndex !== null) {
			Flip.from(flipState.current, {
				targets: ".page-content-expanded",
				duration: 0.4, // Faster
				ease: "power3.inOut",
				absolute: true,
				zIndex: 50,
			});
		}
		// Closing
		else {
			Flip.from(flipState.current, {
				targets: refs.map((r) => r.current), // Target all cards, Flip will match IDs
				duration: 0.4, // Faster
				ease: "power3.inOut",
				absolute: true, // Important for the transition
				zIndex: 50,
				onComplete: () => {
					flipState.current = null;

					// Force re-layout/skew of all cards to Ensure 3D context is restored
					// MUST respect the current visual order (order.current)
					const total = refs.length;
					const currentOrder = order.current;

					refs.forEach((r, i) => {
						if (r.current) {
							// Find which slot this card occupies visually
							const visualIndex = currentOrder.indexOf(i);

							if (visualIndex !== -1) {
								// Clear any Flip transform residue first
								gsap.set(r.current, { clearProps: "transform" });
								placeNow(
									r.current,
									makeSlot(visualIndex, cardDistance, verticalDistance, total),
									skewAmount,
								);
							}
						}
					});
				},
			});
		}
	}, [expandedIndex, cardDistance, verticalDistance, skewAmount]);

	const rendered = childArr.map((child, i) => {
		if (!isValidElement<PageContentProps>(child)) return child;

		return cloneElement(
			child as React.ReactElement<PageContentProps>,
			{
				key: i,
				ref: refs[i],
				"data-flip-id": `card-${i}`,
				style: {
					width,
					height,
					...(child.props.style ?? {}),
					opacity: expandedIndex === i ? 0 : 1,
					visibility: expandedIndex === i ? "hidden" : "visible",
				},
				onClick: (e: React.MouseEvent<HTMLDivElement>) => {
					const cardEl = refs[i].current;
					if (cardEl) {
						flipState.current = Flip.getState(cardEl);
					}

					child.props.onClick?.(e);
					onCardClick?.(i);
					setExpandedIndex(i);
				},
				onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						const cardEl = refs[i].current;
						if (cardEl) {
							flipState.current = Flip.getState(cardEl);
						}
						onCardClick?.(i);
						setExpandedIndex(i);
					}
				},
				tabIndex: 0,
				role: "button",
				"aria-label": `Open ${child.props.title}`,
			} as React.HTMLAttributes<HTMLDivElement>,
		);
	});

	return (
		<>
			<section
				ref={container}
				className="absolute transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
				style={{ width, height }}
				aria-label="Page carousel"
			>
				{rendered}
			</section>
			{expandedIndex !== null &&
				createPortal(
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
						onClick={() => {
							// Capture the EXPANDED card state before closing
							const expandedEl = document.querySelector(
								".page-content-expanded",
							);
							if (expandedEl) {
								flipState.current = Flip.getState(expandedEl);
							}
							setExpandedIndex(null);
						}}
						role="dialog"
						aria-modal="true"
						aria-labelledby={`page-title-${expandedIndex}`}
						onKeyDown={(e) => {
							if (e.key === "Escape") {
								const expandedEl = document.querySelector(
									".page-content-expanded",
								);
								if (expandedEl) {
									flipState.current = Flip.getState(expandedEl);
								}
								setExpandedIndex(null);
							}
						}}
					>
						<div
							className="relative w-[calc(100vw-80px)] h-[calc(100vh-80px)] overflow-hidden dark" // Container for the expanded card
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
						>
							{/* Render a clone of the expanded child without transforms */}
							{isValidElement<PageContentProps>(childArr[expandedIndex]) &&
								cloneElement(
									childArr[expandedIndex] as React.ReactElement<any>,
									{
										...childArr[expandedIndex].props,
										"data-flip-id": `card-${expandedIndex}`, // Move the ID here
										id: `page-title-${expandedIndex}`,
										className: cn(
											childArr[expandedIndex].props.className,
											"page-content-expanded",
										), // Helper class for Flip targets selector
										style: { width: "100%", height: "100%" },
										expanded: true,
									},
								)}
						</div>
					</div>,
					document.body,
				)}
		</>
	);
};

export interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	expanded?: boolean;
	preview: React.ReactNode;
	children: React.ReactNode;
}

export function PageContent({
	className,
	expanded,
	title,
	preview,
	children,
	...rest
}: PageContentProps) {
	return (
		<article
			{...rest}
			className={cn(
				"absolute transform-3d will-change-transform overflow-hidden backface-hidden",
				"bg-gray-950 size-full rounded-xl border border-gray-700/40",
				className,
			)}
			aria-label={title}
			id={rest.id || `page-content-${title.toLowerCase().replace(/\s+/g, "-")}`}
		>
			<PageHeader title={title} expanded={expanded} />
			<div aria-hidden={!expanded} className="w-full h-full">
				{expanded ? children : preview}
			</div>
		</article>
	);
}
