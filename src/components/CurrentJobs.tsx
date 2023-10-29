import { useQuery } from "@tanstack/react-query";

import { fetchJobs } from "../utils/http";

import JobItem from "./JobItem";

// type JobProps = {
// 	id: string;
// 	company: string;
// 	position: string;
// 	postedAt: string;
// 	contract: string;
// 	location: string;
// 	other?: string;
// }[];

function CurrentJobs() {
	const { data, isPending, isError } = useQuery({
		queryKey: ["jobs"],
		queryFn: fetchJobs,
	});

	let content;

	if (isPending) {
		content = <p>Loading...</p>;
	}

	if (isError) {
		content = <p>Error!</p>;
	}

	if (data) {
		content = data.map((item) => (
			<JobItem
				key={item.id}
				id={item.id}
				logo={item.logo}
				logoBackground={item.logoBackground}
				company={item.company}
				position={item.position}
				postedAt={item.postedAt}
				contract={item.contract}
				location={item.location}
			/>
		));
	}

	return (
		<div>
			<div className="grid grid-cols-1 gap-8 pt-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">{content}</div>
		</div>
	);
}

export default CurrentJobs;
