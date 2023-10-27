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
		<div>
			<p>CompanyHeader</p>
			<p>{company}</p>
			<p>{logo}</p>
			<p>{logoBackground}</p>
			<p>{website}</p>
		</div>
	);
}

export default CompanyHeader;
