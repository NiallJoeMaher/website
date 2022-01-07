const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  safelist: [
    "text-pink-600",
    "bg-pink-200",
    "text-blue-600",
    "bg-blue-200",
    "text-yellow-600",
    "bg-yellow-200",
    "text-red-600",
    "bg-red-200",
    "text-indigo-600",
    "bg-indigo-200",
    "text-green-600",
    "bg-green-200",
  ],
  theme: {
    extend: {
      colors: {
        "niall-pink": {
          DEFAULT: "#C53B8E",
          50: "#EFC9E0",
          100: "#EAB9D7",
          200: "#E199C4",
          300: "#D87AB2",
          400: "#CE5AA0",
          500: "#C53B8E",
          600: "#9A2E6F",
          700: "#6F2150",
          800: "#441431",
          900: "#180712",
        },
        "niall-orange": {
          DEFAULT: "#FE5F3D",
          50: "#FFF6F4",
          100: "#FFE5DF",
          200: "#FFC3B7",
          300: "#FEA28E",
          400: "#FE8066",
          500: "#FE5F3D",
          600: "#FE3105",
          700: "#CA2401",
          800: "#921A01",
          900: "#5A1000",
        },
      },
      animation: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addComponents }) => {
      const components = {
        ".parallax": {
          "transform-style": "preserve-3d",
        },
        ".parallax-container": {
          "transform-style": "preserve-3d",
          transform: "rotateY(calc(var(--x, 0) * -20deg))",
        },
        ".parallax-item": {
          filter:
            "drop-shadow(0 10px 8px hsl(0 0% 15% / 0.35)) drop-shadow(0 4px 3px hsl(0 0% 15% / 0.35))",
          "transform-style": "preserve-3d",
          transform: `
              translate(-50%, -50%)
              translate(calc(var(--offset-x, 0) * 1%), calc(var(--offset-y, 0) * 1%))
              translate(calc((var(--x, 0) * var(--translate-x, 0) * 1%)), calc((var(--y, 0) * var(--translate-y, 0) * 1%)))
              translate3d(0, 0, calc(var(--offset-z, 0) * 1vmin))
            `,
          // Example:: If x is at -1 and that's the left side of the screen
          // and translate-x is -50 then it would be -1 * -50 * 1% === 50%
        },
      };
      addComponents(components);
    }),
  ],
};
