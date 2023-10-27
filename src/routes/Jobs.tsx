import Header from "../components/UI/Header";
import JobsFilter from "../components/JobsFilter";
import CurrentJobs from "../components/CurrentJobs";

function Jobs() {
	return (
		<>
			<Header />
			<div className="p-8 bg-c-light-grey">
				<JobsFilter />
				<CurrentJobs />
			</div>
		</>
	);
}

export default Jobs;
