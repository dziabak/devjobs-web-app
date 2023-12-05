// INTERNAL IMPORTS
import { CompanyHeaderProps } from "../../types/types";

function CompanyHeader({
	company,
	logo,
	logoBackground,
	website,
}: CompanyHeaderProps) {
	let shortURL!: string;
	let domain: string;
	const startIndex = website.indexOf("://") + 3;
	const endIndex = website.indexOf("/", startIndex);

	if (startIndex !== -1 && endIndex !== -1) {
		domain = website.substring(startIndex, endIndex);
		domain = domain.replace(/^[^.]+\./, ".");
		shortURL = company.replace(/\s+/g, "").toLowerCase().concat(domain);
	}

	return (
		<div className="flex flex-col items-center relative w-full h-[220px] p-8 bg-c-white font-main rounded-lg text-center md:flex-row md:p-0 md:pr-8 md:h-[140px] md:text-left md:justify-between dark:bg-c-very-dark-blue">
			<div
				style={{ backgroundColor: logoBackground }}
				className="absolute flex items-center justify-center w-12 h-12 rounded-2xl -inset-y-6 md:static md:w-[160px] md:h-full md:inset-0 md:rounded-md md:rounded-r-none">
				<img src={logo} alt="" className="p-2 md:scale-[2] md:p-0" />
			</div>
			<div className="flex flex-col items-center justify-between w-full h-full mt-2 md:flex-row md:mt-0">
				<div className="space-y-2 md:ml-12">
					<p className="text-2xl font-bold dark:text-c-white">{company}</p>
					{/* <p className="text-c-dark-grey">{website}</p> */}
					<p className="text-c-dark-grey">{shortURL}</p>
				</div>
				<a
					href={website}
					target="_blank"
					rel="noopener"
					className="w-48 py-3 font-bold text-center transition-colors rounded-md text-c-violet bg-c-violet bg-opacity-10 hover:bg-opacity-30 dark:text-white dark:bg-c-light-violet dark:bg-opacity-20 dark:hover:bg-opacity-50">
					Company Site
				</a>
			</div>
		</div>
	);
}

export default CompanyHeader;
