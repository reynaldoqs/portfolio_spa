import { HeroSection, OverviewCarousel, Statistics } from "@/components";

export function Home() {
	return (
		<div className="w-full h-full relative p-1">
			<div className="absolute left-0 top-0 w-full lg:w-auto lg:left-18 lg:top-1/2 animate-in fade-in duration-1000">
				<Statistics className="flex-row w-full justify-center mt-4 gap-4 lg:gap-8 lg:mt-0 lg:flex-col lg:-translate-y-1/2" />
			</div>
			<div className="absolute w-full flex justify-center lg:w-auto -bottom-[200px] lg:right-[-100px] lg:top-2/5 animate-in fade-in duration-1000">
				<OverviewCarousel />
			</div>
			<HeroSection className="-mt-10 animate-in fade-in duration-1000" />
		</div>
	);
}
