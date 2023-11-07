export const combineStrings = (string1, string2) => {
	// Convert both strings to lowercase and replace spaces with hyphens
	const formattedString1 = string1.toLowerCase().replace(/ /g, "-");
	const formattedString2 = string2.toLowerCase().replace(/ /g, "-");

	// Combine the two formatted strings with "at" in between
	const result = `${formattedString1}-at-${formattedString2}`;

	return result;
};
