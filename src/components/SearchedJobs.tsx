import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../utils/http";

import JobItem from "./JobItem";

import { useSearchParams } from "react-router-dom";

const SearchedJobs = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const position = searchParams.get("position");
	const location = searchParams.get("location");
	const full = searchParams.get("full");

	const positionKeywords = position?.split(" ");

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
		const filteredData = data.filter((item) => {
			// return (
			// 	(item.position.toLowerCase().includes(position.toLowerCase()) ||
			// 		item.company.toLowerCase().includes(position.toLowerCase())) &&
			// 	item.location.toLowerCase().includes(location.toLowerCase())

			// );

			const lowerPosition = item.position.toLowerCase();
			const lowerCompany = item.company.toLowerCase();
			const lowerLocation = item.location.toLowerCase();

			return (
				positionKeywords.some(
					(keyword) =>
						lowerPosition.includes(keyword) || lowerCompany.includes(keyword)
				) &&
				lowerLocation.includes(location.toLowerCase()) 
				&&
				(full === "true" ? item.contract === "Full Time" : item.contract !== "")
			);
		});

		content = filteredData.map((item) => (
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
			<div className="container grid grid-cols-1 gap-8 pt-24 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
				{content}
			</div>
		</div>
	);
};

export default SearchedJobs;
