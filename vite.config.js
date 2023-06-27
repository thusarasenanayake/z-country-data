export default {
  build: {
    manifest: true,
    lib: {
      entry: "src/z-country-data.js",
      name: "z-country-data",
      // formats: ["es", "cjs"],
    },
    minify: true,
    target: ["es2015", "safari11", "ios11"],
  },

};
