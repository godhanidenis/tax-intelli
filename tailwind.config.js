/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A3D2A",
        secondary: "#414D48",
        tertiary: "#D0FA93",
      },
      screens: {
        "lg-900": "900px", // ✅ Custom breakpoint
        "sm-500": "500px", // ✅ Custom breakpoint
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
