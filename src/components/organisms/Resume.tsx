import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "@/assets/pdf/resume.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { FileDown, Mail } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { profile } from "@/constants/profile";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function Resume() {
	const [numPages, setNumPages] = useState<number>();
	const [pageWidth, setPageWidth] = useState<number>(612);
	const containerRef = useRef<HTMLDivElement>(null);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
		setNumPages(numPages);
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let resizeObserver: ResizeObserver;
		let animationFrameId: number;

		const updateWidth = (width: number) => {
			cancelAnimationFrame(animationFrameId);
			animationFrameId = requestAnimationFrame(() => {
				setPageWidth(width - 32); // Subtract padding (custom-scrollbar width + padding)
			});
		};

		resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.contentRect) {
					updateWidth(entry.contentRect.width);
				}
			}
		});

		resizeObserver.observe(container);
		return () => {
			resizeObserver.disconnect();
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = `${profile.name.replace(" ", "-")}-resume.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	const handleContact = () => {
		const recipient = encodeURIComponent(profile.links.email);
		const emailSubject = encodeURIComponent("I'd like to connect with you");

		const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${emailSubject}`;
		window.open(url);
	};

	return (
		<div className="w-full h-full flex flex-col ">
			<div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center py-6 px-6">
				<h4 className="text-md text-gray-300 font-mono">
					Reynaldo Quispe | FullStack Developer | Resume
				</h4>
				{numPages && (
					<p className="text-xs text-gray-600 font-mono ml-4 hidden md:block">
						{numPages} {numPages === 1 ? "page" : "pages"}
					</p>
				)}
				<div className="flex gap-3 justify-center md:ml-auto ">
					<Button
						onClick={handleDownload}
						variant="outline"
						aria-label="Send email to Reynaldo Quispe"
						className="text-gray-300 border-gray-300"
					>
						Download <FileDown />
					</Button>
					<Button
						className="text-gray-300 border-gray-300"
						variant="outline"
						onClick={handleContact}
					>
						Contact me
						<Mail />
					</Button>
				</div>
			</div>
			<div
				ref={containerRef}
				className="w-full overflow-y-auto max-h-full flex justify-center custom-scrollbar"
			>
				<div>
					<Document
						file={resume}
						onLoadSuccess={onDocumentLoadSuccess}
						className="flex flex-col items-center"
					>
						{Array.from(new Array(numPages), (_, index) => (
							<Page
								key={`page_${index + 1}`}
								pageNumber={index + 1}
								className="mb-4 shadow-lg"
								width={pageWidth}
								renderTextLayer={true}
								renderAnnotationLayer={true}
							/>
						))}
					</Document>
				</div>
			</div>
		</div>
	);
}

export function ResumePreview() {
	return (
		<div className="w-full h-full p-4 flex flex-col gap-5">
			<div className="flex gap-2 items-center">
				<div className="h-4 bg-gray-600/40 rounded-full w-2/5" />
				<div className="h-4 bg-gray-600/40 rounded-full w-4 ml-12" />
				<div className="h-4 bg-gray-600/40 rounded-full w-4" />
				<div className="h-4 bg-gray-600/40 rounded-full w-4" />
			</div>
			<div className="bg-gray-300 rounded-lg flex flex-col gap-2 p-5">
				<div className="h-2 bg-gray-400 rounded-full w-2/5 mx-auto" />
				<div className="h-2 bg-gray-400 rounded-full w-1/2 mt-3" />
				<div className="h-2 bg-gray-400 rounded-full w-full" />

				<div className="h-2 bg-gray-400 rounded-full w-full" />
				<div className="h-2 bg-gray-400 rounded-full w-full" />
				<div className="h-2 bg-gray-400 rounded-full w-1/2 mt-1" />
				<div className="h-2 bg-gray-400 rounded-full w-full" />
				<div className="h-2 bg-gray-400 rounded-full w-full" />
				<div className="h-2 bg-gray-400 rounded-full w-full" />
			</div>
		</div>
	);
}
