import { useParams, Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../utils/http";


import Header from "../components/UI/Header";
// import JobItem from "../components/JobItem";
import CompanyHeader from "../components/CompanyHeader";
import JobItemDescription from "../components/JobItemDescription";

function JobItemDetails() {
	const params = useParams();

	const { data, isPending, isError } = useQuery({
		queryKey: ["jobsDetails"],
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
		const filteredData = data.filter((job) => {
			return job.id === params.jobID;
		});

		// console.log(filteredData);

		content = filteredData.map((item) => (
			// <JobItem
			// 	key={item.id}
			// 	id={item.id}
			// 	company={item.company}
			// 	position={item.position}
			// 	postedAt={item.postedAt}
			// 	contract={item.contract}
			// 	location={item.location}
			// />
			<>
				<CompanyHeader
					key={item.id}
					company={item.company}
					logo={item.logo}
					logoBackground={item.logoBackground}
					website={item.website}
				/>
				<JobItemDescription
					key={item.id}
					// id={item.id}
					position={item.position}
					postedAt={item.postedAt}
					contract={item.contract}
					location={item.location}
					apply={item.apply}
					description={item.description}
					requirements={item.requirements}
					role={item.role}
				/>
			</>
		));
	}

	return (
		<div>
			<Header />
			<p>JobItemDetails</p>
			<p>{params.jobID}</p>
			{content}
			<Link to="/">BACK</Link>
		</div>
	);
}

export default JobItemDetails;
