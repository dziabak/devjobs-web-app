import { useDocumentTitle } from "usehooks-ts";

import { JobItemDescriptionProps } from "../../types/types";

function JobItemDescription({
	position,
	company,
	postedAt,
	contract,
	location,
	apply,
	description,
	requirements,
	role,
}: JobItemDescriptionProps) {
	useDocumentTitle(position + " at " + company);

	return (
		<div className="p-8 my-8 rounded-md bg-c-white dark:bg-c-very-dark-blue">
			<div className="flex flex-col justify-between w-full h-full mb-8 md:flex-row md:items-center">
				<div className="mb-12 space-y-2 md:mb-0">
					<div className="flex text-c-dark-grey">
						<p>{postedAt}</p>
						<p className="mx-2 font-bold">•</p>
						<p>{contract}</p>
					</div>
					<p className="text-xl font-bold dark:text-c-white">{position}</p>
					<p className="text-sm font-bold text-c-violet">{location}</p>
				</div>

				<a
					href={apply}
					target="_blank"
					rel="noopener"
					className="w-full py-3 font-bold text-center transition-colors rounded-md text-c-white bg-c-violet md:w-48 hover:bg-c-light-violet">
					Apply Now
				</a>
			</div>

			<div className="text-c-dark-grey dark:text-c-grey">
				<p>{description}</p>
				<p className="my-8 text-xl font-bold text-black dark:text-c-white">
					Requirements
				</p>
				<p className="mb-8">{requirements.content}</p>
				<ul className="space-y-4 list-disc list-inside">
					{requirements.items.map((item) => (
						<li key={item} className="marker:text-c-violet marker:font-bold">
							{item}
						</li>
					))}
				</ul>
				<p className="my-8 text-xl font-bold text-black dark:text-c-white">
					What You Will Do
				</p>
				<p className="mb-8">{role.content}</p>
				<ul className="space-y-4 list-decimal list-inside">
					{role.items.map((item) => (
						<li key={item} className="marker:text-c-violet marker:font-bold">
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default JobItemDescription;
