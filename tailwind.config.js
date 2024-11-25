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
          sch: "#0b1ff55",
          f: "#b3ade1",
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
    },
  },
  plugins: [],
};
