import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";

import Jobs from "./routes/Jobs";
import JobsSearch from "./routes/JobsSearch";
import JobItemDetails from "./routes/JobItemDetails";

import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
	{
		path: "/jobs",
		element: <RootLayout />,
		children: [
			{
				path: "/jobs",
				element: <Jobs />,
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
