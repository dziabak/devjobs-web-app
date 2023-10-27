import { Link } from "react-router-dom";

type JobItemProps = {
	// id: number;
	id: string;
	company: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	logo: string;
	logoBackground: string;
};

function JobItem({
	id,
	company,
	position,
	postedAt,
	contract,
	location,
	logo,
	logoBackground,
}: JobItemProps) {
	return (
		<Link to={`/jobs/${id}`} reloadDocument>
			<div className="relative w-full h-[220px] p-8 pt-12 bg-c-white font-main rounded-lg">
				<div
					style={{ backgroundColor: logoBackground }}
					className="absolute flex items-center justify-center w-12 h-12 rounded-2xl -inset-y-6">
					<img src={logo} alt="" className="p-2" />
				</div>
				{/* <p>id: {id}</p> */}
				{/* <p>logo: {logo}</p> */}
				{/* <p>logoBackground: {logoBackground}</p> */}
				<div className="flex flex-col justify-between w-full h-full">
					<div className="space-y-2">
						<div className="flex text-c-dark-grey">
							<p>{postedAt}</p>
							<p className="mx-2 font-bold">•</p>
							<p>{contract}</p>
						</div>
						<p className="text-lg font-bold">{position}</p>
						<p className="text-c-dark-grey">{company}</p>
					</div>

					<p className="text-sm font-bold text-c-violet">{location}</p>
				</div>
			</div>
		</Link>
	);
}

export default JobItem;
