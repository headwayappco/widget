import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    babel({
      exclude: ["node_modules/**"]
    })
  ]
};
