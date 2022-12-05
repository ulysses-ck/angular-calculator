/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "#395144",
				"secondary-color": "#4E6C50",
				"bg-primary-color": "#AA8B56",
				"bg-secondary-color": "#F0EBCE",
			},
		},
	},
	plugins: [],
};
