import { MacDot } from "./MacDot";

type PageHeaderProps = {
	title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
	return (
		<section className="w-full flex justify-between h-[34px] bg-gray-900 border-b-gray-700/40 border-b px-3">
			<div className="flex gap-2 items-center flex-1">
				<MacDot className="bg-red-400" />
				<MacDot className="bg-amber-400" />
				<MacDot className="bg-green-400" />
			</div>
			<div className="flex-4 flex justify-center items-center">
				<h2 className="font-medium text-sm text-gray-400">{title}</h2>
			</div>
			<div className="flex-1" />
		</section>
	);
}
