import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";

const DURATION = 5;
export function AnimatedOverlay() {
	const overlayRef = useRef(null);
	const [isComplete, setIsComplete] = useState(false);

	useGSAP(
		() => {
			gsap.fromTo(
				overlayRef.current,
				{
					backgroundColor: "rgba(0, 0, 0, 1)",
					backdropFilter: "blur(20px)",
					pointerEvents: "all",
				},
				{
					duration: DURATION,
					ease: "power2.inOut",
					backgroundColor: "rgba(0, 0, 0, 0)",
					backdropFilter: "blur(0px)",
					onComplete: () => {
						gsap.set(overlayRef.current, { pointerEvents: "none" });
						setIsComplete(true);
					},
				},
			);
		},
		{ scope: overlayRef },
	);

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
