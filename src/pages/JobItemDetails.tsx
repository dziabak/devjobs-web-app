// BUILT-IN IMPORTS
import { useParams } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchJobItem } from "../services/api/http";
import Header from "../components/layouts/Header";
import CompanyHeader from "../features/details-page/CompanyHeader";
import JobItemDescription from "../features/details-page/JobItemDescription";
import ApplyNowFooter from "../features/details-page/ApplyNowFooter";
import ErrorBlock from "../components/UI/ErrorBlock";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function JobItemDetails() {
	const params = useParams();

	const { data, isPending, isError } = useQuery({
		queryKey: ["jobs", params.jobID],
		queryFn: () => fetchJobItem({ id: params.jobID }),
	});

	let loadingContent!: JSX.Element;
	let header!: JSX.Element[];
	let content!: JSX.Element | JSX.Element[];
	let footer!: JSX.Element[];

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
				key={item.id}
				apply={item.apply}
				position={item.position}
				company={item.company}
			/>
		));

		if (data.length === 0) {
			content = (
				<ErrorBlock
					errorHeader="This page does not exist!"
					errorMessage="Please return to the home page"
				/>
			);
		}
	}

	return (
		<div className="bg-c-light-grey dark:bg-c-midnight">
			<Header />
			{loadingContent}
			<section className="relative px-8 py-8 pt-48 sm:px-0 md:pt-24">
				<div className="container absolute h-0 px-8 -inset-y-10 -inset-x-1/2 sm:px-0 xl:px-64">
					{header}
				</div>
				<div className="container min-h-screen">{content}</div>
			</section>
			{footer}
		</div>
	);
}

export default JobItemDetails;
