// BUILT-IN IMPORTS
import { RouterProvider } from "react-router-dom";
// EXTERNAL IMPORTS
import { QueryClientProvider } from "@tanstack/react-query";
//INTERNAL IMPORTS
import { queryClient } from "./services/api/http";
import { router } from "./pages/router";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
