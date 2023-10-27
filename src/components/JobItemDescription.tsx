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
		<div>
			<p>JobItemDescription</p>
			<p>{position}</p>
			<p>{postedAt}</p>
			<p>{contract}</p>
			<p>{location}</p>
			<p>{apply}</p>
			<p>{description}</p>
			<p>{requirements.content}</p>
			{requirements.items.map((item) => (
				<p key={item}>{item}</p>
			))}
			<p>{role.content}</p>
			{role.items.map((item) => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
}

export default JobItemDescription;
