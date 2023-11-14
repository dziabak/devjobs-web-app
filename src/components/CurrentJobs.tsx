import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchJobs } from "../utils/http";

import JobItem from "./JobItem";

import LoadingSpinner from "./UI/LoadingSpinner";

function CurrentJobs() {
	const itemsPerPage = 9;
	const [totalDisplayedItems, setTotalDisplayedItems] = useState(itemsPerPage);

	const loadMoreData = () => {
		setTotalDisplayedItems(totalDisplayedItems + itemsPerPage);
	};

	const { data, isPending, isError } = useQuery({
		queryKey: ["jobs"],
		queryFn: fetchJobs,
	});

	let loadingContent;
	let content;
	let loadMoreContent;

	if (isPending) {
		loadingContent = <LoadingSpinner />;
	}

	if (isError) {
		content = <p>Error!</p>;
	}

	if (data) {
		const slicedData = data.slice(0, totalDisplayedItems);

		content = slicedData.map((item) => (
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

		if (totalDisplayedItems > data.length) {
			loadMoreContent = (
				<p className="font-bold text-center text-c-violet">
					No more offers to load!
				</p>
			);
		} else {
			loadMoreContent = (
				<button
					className="px-16 py-3 font-bold text-center transition-colors rounded-md text-c-white bg-c-violet hover:bg-c-light-violet"
					onClick={loadMoreData}>
					Load More
				</button>
			);
		}
	}

	return (
		<div className="min-h-screen">
			{loadingContent}
			<div className="container grid grid-cols-1 gap-8 pt-24 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
				{content}
			</div>
			<div className="flex justify-center mt-12">{loadMoreContent}</div>
		</div>
	);
}

export default CurrentJobs;
