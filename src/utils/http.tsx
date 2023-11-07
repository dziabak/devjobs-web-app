import { QueryClient } from "@tanstack/react-query";
import { combineStrings } from "./combine-strings";
export const queryClient = new QueryClient();

type JobsProps = {
	id: string;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: { content: string; items: string[] };
	role: { content: string; items: string[] };
}[];

export async function fetchJobs(): Promise<JobsProps> {
	const response = await fetch("../../data.json");

	if (!response.ok) {
		const error = new Error("Error message");
		// error.code = response.status;
		// error.info = await response.json();
		throw error;
	}

	const jobs = await response.json();

	return jobs;
}

export async function fetchJobItem({ id, signal }) {
	const response = await fetch("../../data.json", { signal });

	if (!response.ok) {
		const error = new Error("Error message");
		// error.code = response.status;
		// error.info = await response.json();
		throw error;
	}

	const jobItem = await response.json();

	const filteredData = jobItem.filter((job) => {
		const combinedString = combineStrings(job.position, job.company);
		return combinedString === id;
	});

	return filteredData;
}
