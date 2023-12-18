// EXTERNAL IMPORTS
import { QueryClient } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { JobsProps } from "../../types/types";
import { combineStrings } from "../../utils/combine-strings";

export const queryClient = new QueryClient();

export async function fetchJobs(): Promise<JobsProps> {
	const response = await fetch(
		"https://devjobs-web-app-43ac0-default-rtdb.europe-west1.firebasedatabase.app/data.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const jobs: JobsProps = await response.json();

	return jobs;
}

export async function fetchJobItem({
	id,
}: {
	id: string | undefined;
}): Promise<JobsProps> {
	const response = await fetch(
		"https://devjobs-web-app-43ac0-default-rtdb.europe-west1.firebasedatabase.app/data.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

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
