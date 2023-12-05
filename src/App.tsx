import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/api/http";

import Jobs from "./pages/Jobs";
import JobsSearch from "./pages/JobsSearch";
import JobItemDetails from "./pages/JobItemDetails";

import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
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

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
