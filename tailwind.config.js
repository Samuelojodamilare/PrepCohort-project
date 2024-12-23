/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f5de4",
        secondary: "#f57005",
        bg: {
          st1: "#f4f4f4",
          g: "#f6f6f6",
          m: "#fbf9f9",
          sc2: "#F9F9F9",
          sc1: "#edf1fa",
          6: "#ebf1ff",
          f: "#1f1944",
        },
        text: {
          blue: "#1F4497",
          h: "#2a254d",
          p: "#697585",
          sch: "#0b1f55",
          f: "#b3ade1",
          c: "#697585",
        },
        cards: {
          p: "#666666",
          h: "#062335",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        workSans: "var(--font-work-sans)",
      },
      screens: {
        "2xl": "1400px",
        "0.5xl": "576px",
        xl: "992px",
        "1xl": "1200px",
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out forwards",
        slideDown: "slideDown 1s ease-in-out forwards",
        fadeLeft: "fadeLeft 1s ease-in-out forwards",
        fadeRight: "fadeRight 1s ease-in-out forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
