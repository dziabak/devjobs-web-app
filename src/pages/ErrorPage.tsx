// INTERNAL IMPORTS
import Header from "../components/layouts/Header";
import ErrorBlock from "../components/UI/ErrorBlock";

const ErrorPage = () => {
	return (
		<div className="min-h-screen bg-c-light-grey dark:bg-c-midnight">
			<Header />
			<div className="mt-16">
				<ErrorBlock
					errorHeader="This page does not exist!"
					errorMessage="Please return to the home page"
				/>
			</div>
		</div>
	);
};

export default ErrorPage;
