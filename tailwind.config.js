module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in": "fade-in 1s ease-out",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["group-hover", "hover"],
      translate: ["group-hover"],
      scale: ["group-hover"],
      opacity: ["group-hover"],
      bgOpacity: ["group-hover"],
      visibility: ["group-hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
