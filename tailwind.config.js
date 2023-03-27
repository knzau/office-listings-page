/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"primary-dark-blue": "#313E4F",
			"primary-light-grey": "#E8EDF3",
			"primary-grey": "#989EA7",
			"accent-blue": "#33A6BA",
			"accent-red": "#FF7B92",
			"accent-yellow": "#FFC062",
			white: "#FFFFFF",
		},
		extend: {
			fontFamily: {
				roboto: ["var(--font-roboto"],
			},
			boxShadow: {
				base: "0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
				"inner-base": "0px 4px 6px 0px #0000000D",
				"inner-base-2": "0px 10px 15px -5px #0000001A",
			},
			borderRadius: {
				xl: "8px",
				l: "4px",
			},
			fontSize: {
				"display-1": "80px",
				"display-2": "64px",
				"header-1": "48px",
				"header-2": "40px",
				"header-3": "32px",
				"header-4": "24px",
				"text-large": "48px",
				"text-body": "40px",
				"text-small": "32px",
				"text-micro": "24px",
				"text-meta-title": "12px",
			},
			padding: {
				160: "160px",
				19: "19px",
			},
			margin: {
				25: "25px",
			},
			lineHeight: {
				30: "30px",
				36: "36px",
			},
			gap: {
				11: "11px",
			},
		},
	},
	plugins: [],
};
