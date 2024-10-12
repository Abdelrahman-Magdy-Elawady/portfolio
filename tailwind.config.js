/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "support-hover": { raw: "(hover: hover) and (pointer: fine)" },
      },
    },
  },
  plugins: [],
};
