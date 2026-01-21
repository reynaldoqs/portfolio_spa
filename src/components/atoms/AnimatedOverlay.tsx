import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const DURATION = 5;
export function AnimatedOverlay() {
	const overlayRef = useRef(null);
	const [isComplete, setIsComplete] = useState(false);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				overlayRef.current,
				{
					// Initial State: Solid black, high blur, blocks clicks
					backgroundColor: "rgba(0, 0, 0, 1)",
					backdropFilter: "blur(20px)",
					pointerEvents: "all", // Blocks user interaction while black
				},
				{
					// Animation config
					duration: DURATION,
					ease: "power2.inOut", // Smooth ease (optional)

					// Target State: Transparent, no blur
					backgroundColor: "rgba(0, 0, 0, 0)",
					backdropFilter: "blur(0px)",

					// Cleanup: Allow clicks to pass through after animation
					onComplete: () => {
						gsap.set(overlayRef.current, { pointerEvents: "none" });
						// Remove component from DOM after animation completes
						setIsComplete(true);
					},
				},
			);
		}, overlayRef);

		return () => ctx.revert(); // Cleanup GSAP context on unmount
	}, []);

	// Remove component from DOM once animation is complete
	if (isComplete) {
		return null;
	}

	return (
		<div
			ref={overlayRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: 997, // Ensure it sits on top of everything
			}}
		/>
	);
}
