type CompanyHeaderProps = {
	id?: string;
	company: string;
	logo: string;
	logoBackground: string;
	website: string;
};

function CompanyHeader({
	company,
	logo,
	logoBackground,
	website,
}: CompanyHeaderProps) {
	return (
		<div className="flex flex-col items-center relative w-full h-[220px] p-8 bg-c-white font-main rounded-lg text-center md:flex-row md:p-0 md:pr-8 md:h-[140px] md:text-left md:justify-between">
			<div
				style={{ backgroundColor: logoBackground }}
				className="absolute flex items-center justify-center w-12 h-12 rounded-2xl -inset-y-6 md:static md:w-[140px] md:h-full md:inset-0 md:rounded-md">
				<img src={logo} alt="" className="p-2 md:p-0" />
			</div>
			<div className="flex flex-col items-center justify-between w-full h-full mt-2 md:flex-row md:mt-0">
				<div className="space-y-2 md:ml-12">
					<p className="text-2xl font-bold">{company}</p>
					<p className="text-c-dark-grey">{website}</p>
				</div>
				<a
					href={website}
					target="_blank"
					rel="noopener"
					className="px-6 py-3 font-bold rounded-md text-c-violet bg-c-violet bg-opacity-10">
					Company Site
				</a>
			</div>
		</div>
	);
}

export default CompanyHeader;
