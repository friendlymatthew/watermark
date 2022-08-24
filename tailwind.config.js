/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				playfair: "'Playfair Display', serif",
				raleway: "'Raleway', sans-serif",
			},
		},
	},
	plugins: [require("daisyui")],
};
