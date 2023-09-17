/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			Margarine: ["Margarine", "cursive"], // Ensure fonts with spaces have " " surrounding it.
			Jua: ["Jua", " sans-serif"],
		},
	},
	plugins: [],
};
