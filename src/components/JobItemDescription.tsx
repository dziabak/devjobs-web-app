type JobItemDescriptionProps = {
	id?: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	apply: string;
	description: string;
	requirements: { content: string; items: string[] };
	role: { content: string; items: string[] };
};

function JobItemDescription({
	// id,
	position,
	postedAt,
	contract,
	location,
	apply,
	description,
	requirements,
	role,
}: JobItemDescriptionProps) {
	return (
		<div className="p-8 my-8 rounded-md bg-c-white">
			<div className="flex flex-col justify-between w-full h-full mb-8 md:flex-row md:items-center">
				<div className="mb-12 space-y-2 md:mb-0">
					<div className="flex text-c-dark-grey">
						<p>{postedAt}</p>
						<p className="mx-2 font-bold">•</p>
						<p>{contract}</p>
					</div>
					<p className="text-xl font-bold">{position}</p>
					<p className="text-sm font-bold text-c-violet">{location}</p>
				</div>

				<a
					href={apply}
					target="_blank"
					rel="noopener"
					className="w-full px-6 py-3 font-bold text-center rounded-md text-c-white bg-c-violet md:w-1/5">
					Apply Now
				</a>
			</div>

			<div className="text-c-dark-grey">
				<p>{description}</p>
				<p className="my-8 text-xl font-bold text-black">Requirements</p>
				<p className="mb-8">{requirements.content}</p>
				<ul className="space-y-4 list-disc list-inside">
					{requirements.items.map((item) => (
						<li key={item} className="marker:text-c-violet marker:font-bold">
							{item}
						</li>
					))}
				</ul>
				<p className="my-8 text-xl font-bold text-black">What You Will Do</p>
				<p className="mb-8">{role.content}</p>
				<ul className="space-y-4 list-decimal list-inside">
					{role.items.map((item) => (
						<li key={item} className="marker:text-c-violet marker:font-bold">
							{item}
						</li>
					))}
					{/* {role.items.map((item) => (
						<li key={item} className="marker:text-c-violet marker:font-bold"><span>{role.items.indexOf(item) + 1}</span>{item}</li>
					))} */}
				</ul>
			</div>
		</div>
	);
}

export default JobItemDescription;
