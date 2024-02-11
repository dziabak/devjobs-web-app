// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import { JobItemProps } from "../../types/types";
import { combineStrings } from "../../utils/combine-strings";

function JobItem({
	company,
	position,
	postedAt,
	contract,
	location,
	logo,
	logoBackground,
}: JobItemProps) {
	const combinedString = combineStrings(position, company);

	return (
		<Link to={`/jobs/${combinedString}`} reloadDocument>
			<div className="group relative w-full h-[220px] p-8 pt-12 bg-c-white font-main rounded-lg dark:bg-c-very-dark-blue">
				<div
					style={{ backgroundColor: logoBackground }}
					className="absolute flex items-center justify-center w-12 h-12 rounded-2xl -inset-y-6">
					<img src={logo} alt={`${company} logo icon`} className="p-2" />
				</div>
				<div className="flex flex-col justify-between w-full h-full">
					<div className="space-y-2">
						<div className="flex text-c-dark-grey">
							<p>{postedAt}</p>
							<p className="mx-2 font-bold">•</p>
							<p>{contract}</p>
						</div>
						<p className="text-lg font-bold text-black transition-colors dark:text-c-white group-hover:text-c-dark-grey">
							{position}
						</p>
						<p className="text-c-dark-grey">{company}</p>
					</div>

					<p className="text-sm font-bold text-c-violet">{location}</p>
				</div>
			</div>
		</Link>
	);
}

export default JobItem;
