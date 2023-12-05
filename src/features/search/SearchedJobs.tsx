import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../../services/api/http";

import JobItem from "../home-page/JobItem";

import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorBlock from "../../components/UI/ErrorBlock";

const SearchedJobs = () => {
	const [searchParams, _setSearchParams] = useSearchParams();
	const position = searchParams.get("position");
	const location = searchParams.get("location");
	const full = searchParams.get("full");

	const positionKeywords = position?.split(" ");

	const { data, isPending, isError } = useQuery({
		queryKey: ["jobs"],
		queryFn: fetchJobs,
	});

	let content!: JSX.Element | JSX.Element[];
	let searchContent!: JSX.Element;

	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				errorHeader="We are sorry :("
				errorMessage="Could not fetch data from the server. Please try again later."
			/>
		);
	}

	if (data) {
		const filteredData = data.filter((item) => {
			const lowerPosition = item.position.toLowerCase();
			const lowerCompany = item.company.toLowerCase();
			const lowerLocation = item.location.toLowerCase();

			return (
				positionKeywords!.some(
					(keyword) =>
						lowerPosition.includes(keyword) || lowerCompany.includes(keyword)
				) &&
				lowerLocation.includes(location!.toLowerCase()) &&
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

		if (filteredData.length < 1) {
			searchContent = (
				<ErrorBlock
					errorHeader="Oh no :("
					errorMessage="There are no offers matching your search criteria right now."
				/>
			);
		}
	}

	return (
		<div className="min-h-screen">
			<div className="container grid grid-cols-1 gap-8 pt-24 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
				{content}
			</div>
			<div className="flex justify-center mt-12">{searchContent}</div>
		</div>
	);
};

export default SearchedJobs;
