module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
     "./pages/**/*.js", "./components/**/*.js", "./utils/**/*.js"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
