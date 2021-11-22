module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    purge: {
      safelist: [
        "pink-600",
        "pink-200",
        "blue-600",
        "blue-200",
        "yellow-600",
        "yellow-200",
        "red-600",
        "red-200",
        "indigo-600",
        "indigo-200",
        "green-600",
        "green-200",
      ],
    },
  },
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
};
