module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./modules/**/*.vue",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xl: { min: "1280px", max: "1600px" },
      md: { min: "768px", max: "1280px" },
      xs: { min: "360px", max: "768px" },
    },
  },
};
