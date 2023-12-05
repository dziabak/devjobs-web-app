import Header from "../components/layouts/Header";
import JobsFilter from "../features/search/JobsFilter";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<Header />
			<div className="relative px-8 pb-10 sm:px-0 bg-c-light-grey dark:bg-c-midnight">
				<div className="container absolute h-0 px-8 -inset-y-10 -inset-x-1/2 sm:px-0">
					<JobsFilter />
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;
