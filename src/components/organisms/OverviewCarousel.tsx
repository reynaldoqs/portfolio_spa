import { PageHeader } from "../atoms";
import { PageCarousel, PageContent } from "../molecules";

export function OverviewCarousel() {
	return (
		<PageCarousel
			cardDistance={60}
			verticalDistance={90}
			delay={5000}
			pauseOnHover={true}
		>
			<PageContent title="Resume" preview={<div>preview</div>}>
				<PageHeader title="Resume" />
			</PageContent>

			<PageContent title="Projects" preview={<div>preview</div>}>
				hola 2
			</PageContent>

			<PageContent title="Skills" preview={<div>preview</div>}>
				hola 3
			</PageContent>
		</PageCarousel>
	);
}
