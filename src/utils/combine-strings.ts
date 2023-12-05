export const combineStrings = (string1: string, string2: string) => {
	const formattedString1 = string1.toLowerCase().replace(/ /g, "-");
	const formattedString2 = string2.toLowerCase().replace(/ /g, "-");

	const combinedString = `${formattedString1}-at-${formattedString2}`;

	return combinedString;
};
