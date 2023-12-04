export type JobsProps = {
	id: string;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: { content: string; items: string[] };
	role: { content: string; items: string[] };
}[];

export type JobItemProps = {
	id?: string;
	company: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	logo: string;
	logoBackground: string;
};

export type JobItemDescriptionProps = {
	id?: string;
	position: string;
	company: string;
	postedAt: string;
	contract: string;
	location: string;
	apply: string;
	description: string;
	requirements: { content: string; items: string[] };
	role: { content: string; items: string[] };
};

export type CompanyHeaderProps = {
	id?: string;
	company: string;
	logo: string;
	logoBackground: string;
	website: string;
};
