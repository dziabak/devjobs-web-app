import { Link } from "react-router-dom";

type JobItemProps = {
	// id: number;
	id: string;
	company: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
};

function JobItem({
	id,
	company,
	position,
	postedAt,
	contract,
	location,
}: JobItemProps) {
	return (
		<Link to={`/jobs/${id}`}>
			<p>id: {id}</p>
			<p>company: {company}</p>
			<p>position: {position}</p>
			<p>postedAt: {postedAt}</p>
			<p>contract: {contract}</p>
			<p>location: {location}</p>
		</Link>
	);
}

export default JobItem;
