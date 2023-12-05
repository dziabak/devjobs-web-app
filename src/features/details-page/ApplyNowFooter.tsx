type ApplyNowFooterProps = {
	apply: string;
	position: string;
	company: string;
};

function ApplyNowFooter({ apply, position, company }: ApplyNowFooterProps) {
	return (
		<div className="w-full bg-c-white rounded-t-md dark:bg-c-very-dark-blue">
			<div className="container">
				<div className="flex items-center p-8 sm:px-0">
					<div className="hidden md:flex-col md:flex md:w-4/5 md:space-y-2">
						<p className="text-2xl font-bold dark:text-white">{position}</p>
						<p className="text-c-dark-grey">{company}</p>
					</div>
					<a
						href={apply}
						target="_blank"
						rel="noopener"
						className="w-full px-6 py-3 font-bold text-center transition-colors rounded-md text-c-white bg-c-violet md:w-1/5 hover:bg-c-light-violet">
						Apply Now
					</a>
				</div>
			</div>
		</div>

		// <div className="w-full p-8 bg-c-white rounded-t-md">
		// 	<div className="hidden md:flex-col md:flex md:w-4/5 md:space-y-2">
		// 		<p className="text-2xl font-bold">{position}</p>
		// 		<p className="text-c-dark-grey">{company}</p>
		// 	</div>
		// 	<a
		// 		href={apply}
		// 		target="_blank"
		// 		rel="noopener"
		// 		className="w-full px-6 py-3 font-bold text-center rounded-md text-c-white bg-c-violet md:w-1/5">
		// 		Apply Now
		// 	</a>
		// </div>
	);
}

export default ApplyNowFooter;
