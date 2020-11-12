module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.lg"),
          backgroundColor: theme("colors.grayish"),
          "&:focus": {
            backgroundColor: theme("colors.grayish"),
          },
        },
      },
    }),
    extend: {
      colors: {
        primary: "#6017b4",
        primaryLight: "#8851C7",
        secondary: "#12A0FF",
        secondaryLight: "#4DB8FF",
        dark: "#2c3e50",
        danger: "#DE7692",
        grayish: "#f6f8fa",
        google: "#db4437",
        facebook: "#3c5a99",
        twitter: "#1da1f2",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
