import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchJobs } from "../../services/api/http";

import JobItem from "./JobItem";

import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorBlock from "../../components/UI/ErrorBlock";
import LoadMoreContent from "./LoadMoreContent";

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

	let loadingContent!: JSX.Element;
	let content!: JSX.Element | JSX.Element[];
	let loadMoreContent!: JSX.Element;

	if (isPending) {
		loadingContent = <LoadingSpinner />;
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
			loadMoreContent = <LoadMoreContent canLoadMoreContent={false} />;
		} else {
			loadMoreContent = (
				<LoadMoreContent
					canLoadMoreContent={true}
					onLoadMoreData={loadMoreData}
				/>
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
