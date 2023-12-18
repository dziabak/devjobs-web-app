// BUILT-IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// INTERNAL IMPORTS
import Jobs from "./Jobs";
import JobsSearch from "./JobsSearch";
import JobItemDetails from "./JobItemDetails";
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Jobs />,
				children: [
					// <Jobs /> component is added again to ensure that "/jobs" path is supported and that URL with search parameters lead to the specified query
					{
						path: "/jobs",
						element: <Jobs />,
					},
				],
			},
			{
				path: "/jobs/search",
				element: <JobsSearch />,
			},
		],
	},
	{ path: "/jobs/:jobID", element: <JobItemDetails /> },
]);
