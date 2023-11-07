import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import Header from "../components/UI/Header";

import CompanyHeader from "../components/CompanyHeader";
import JobItemDescription from "../components/JobItemDescription";
import ApplyNowFooter from "../components/UI/ApplyNowFooter";

import LoadingSpinner from "../components/UI/LoadingSpinner";

import { fetchJobItem } from "../utils/http";

function JobItemDetails() {
	const params = useParams();

	const { data, isPending, isError, error } = useQuery({
		queryKey: ["jobs", params.jobID],
		queryFn: ({ signal }) => fetchJobItem({ id: params.jobID, signal }),
	});

	let loadingContent;
	let header;
	let content;
	let footer;

	if (isPending) {
		loadingContent = <LoadingSpinner />;
	}

	if (isError) {
		content = <p>{error.message}</p>;
	}

	if (data) {
		header = data.map((item) => (
			<CompanyHeader
				key={item.id}
				company={item.company}
				logo={item.logo}
				logoBackground={item.logoBackground}
				website={item.website}
			/>
		));

		content = data.map((item) => (
			<JobItemDescription
				key={item.id}
				// id={item.id}
				position={item.position}
				company={item.company}
				postedAt={item.postedAt}
				contract={item.contract}
				location={item.location}
				apply={item.apply}
				description={item.description}
				requirements={item.requirements}
				role={item.role}
			/>
		));

		footer = data.map((item) => (
			<ApplyNowFooter
				apply={item.apply}
				position={item.position}
				company={item.company}
			/>
		));
	}

	return (
		<div className="bg-c-light-grey dark:bg-c-midnight">
			<Header />
			{loadingContent}
			<section className="relative px-8 py-8 pt-48 sm:px-0 md:pt-24">
				<div className="container absolute h-0 px-8 -inset-y-10 -inset-x-1/2 sm:px-0 xl:px-64">
					{header}
				</div>
				<div className="container">{content}</div>
			</section>

			{footer}
		</div>
	);
}

export default JobItemDetails;
