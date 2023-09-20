/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.875rem, min(2dvw, 2dvh), 5rem)",
      },
      fontFamily: {
        "public-sans": ["Public Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "greyish-blue": "hsl(233, 8%, 62%)",
        "light-greyish-blue": "hsl(220, 16%, 96%)",
        "very-light-grey": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
