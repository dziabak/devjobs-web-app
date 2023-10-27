/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				main: ["Kumbh Sans", "sans-serif"],
			},
			colors: {
				"c-violet": "#5964e0",
				"c-light-violet": "#939bf4",
				"c-very-dark-blue": "#19202d",
				"c-midnight": "#121721",
				"c-white": "#ffffff",
				"c-light-grey": "#f4f6f8",
				"c-grey": "#9daec2",
				"c-dark-grey": "#6e8098",
			},
		},
	},
	// daisyui: { themes: [{ mytheme: { neutral: "#3abff8" } }] },
	plugins: [require("daisyui")],
};
