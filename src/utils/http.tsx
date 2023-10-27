import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

type JobsProps = {
	// id: number;
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
	// const response = await fetch(
	// 	"https://react-tutorial-88ffc-default-rtdb.europe-west1.firebasedatabase.app/devjobs-web-app.json",
	// 	{
	// 		method: "GET",
	// 		headers: { "Content-Type": "application.json" },
	// 	}
	// );

	if (!response.ok) {
		const error = new Error("Error message");
		// error.code = response.status;
		// error.info = await response.json();
		throw error;
	}

	const jobs = await response.json();

	// console.log(jobs);
	// console.log(jobs[0].requirements.content);
	// console.log(jobs[0].requirements.items);

	return jobs;
}

// export async function fetchSelectedJob(): Promise<JobsProps> {
// 	const response = await fetch("../../data.json");
// 	// const response = await fetch(
// 	// 	"https://react-tutorial-88ffc-default-rtdb.europe-west1.firebasedatabase.app/devjobs-web-app.json",
// 	// 	{
// 	// 		method: "GET",
// 	// 		headers: { "Content-Type": "application.json" },
// 	// 	}
// 	// );

// 	if (!response.ok) {
// 		const error = new Error("Error message");
// 		// error.code = response.status;
// 		// error.info = await response.json();
// 		throw error;
// 	}

// 	const jobs = await response.json();

//     const selectedJob = jobs.filter((job) => {
// 		return job.id === job.jobID;
// 	});

//     console.log(selectedJob);

// 	return selectedJob;
// }
