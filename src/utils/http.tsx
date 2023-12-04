import { QueryClient } from "@tanstack/react-query";
import { combineStrings } from "./combine-strings";

import { JobsProps } from "../types/types";

export const queryClient = new QueryClient();

export async function fetchJobs(): Promise<JobsProps> {
	const response = await fetch("../../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const jobs = await response.json();

	return jobs;
}

export async function fetchJobItem({
	id,
}: {
	id: string | undefined;
}): Promise<JobsProps> {
	const response = await fetch("../../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const jobItem: JobsProps = await response.json();

	const filteredData = jobItem.filter((job) => {
		const combinedString = combineStrings(job.position, job.company);
		return combinedString === id;
	});

	return filteredData;
}
