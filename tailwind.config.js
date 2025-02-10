/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        wave: "wave 1.5s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(20deg)" },
          "50%": { transform: "rotate(-20deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#570DF8", // Custom primary color
          secondary: "#F000B8", // Custom secondary color
          accent: "#37CDBE", // Custom accent color
          neutral: "#fff", // Custom neutral color
          "base-100": "#03012c", // Base background color
          info: "#3ABFF8", // Info color
          success: "#36D399", // Success color
          warning: "#FBBD23", // Warning color
          error: "#F87272", // Error color
        },
        light: {
          primary: "#570DF8", // Custom primary color
          secondary: "#F000B8", // Custom secondary color
          accent: "black", // Custom accent color
          neutral: "black", // Custom neutral color
          "base-100": "white", // Base background color (white)
          info: "#3ABFF8", // Info color
          success: "#36D399", // Success color
          warning: "#FBBD23", // Warning color
          error: "#F87272", // Error color
          "base-content": "black", // Base text color (black)
        },
      },
    ],
  },
});
