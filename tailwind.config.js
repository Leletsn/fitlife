tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise 600ms cubic-bezier(0.16, 1, 0.3, 1) backwards",
      },
      colors: {
        primary: "#00b894",
        brand: { DEFAULT: "#007a63", dark: "#006652" },
        field: "#7b8a8f",
        secondary: "#2d3436",
        page: "#f0f2f5",
        ink: "#333333",
        muted: "#636e72",
        line: "#dfe6e9",
        water: { DEFAULT: "#0668b8", dark: "#055596" },
        danger: { DEFAULT: "#d63031", dark: "#b71c1c" },
      },
    },
  },
};
