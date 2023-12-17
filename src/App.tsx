// BUILT-IN IMPORRTS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// EXTERNAL IMPORTS
import { QueryClientProvider } from "@tanstack/react-query";
//INTERNAL IMPORTS
import { queryClient } from "./services/api/http";
import Jobs from "./pages/Jobs";
import JobsSearch from "./pages/JobsSearch";
import JobItemDetails from "./pages/JobItemDetails";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
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

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
