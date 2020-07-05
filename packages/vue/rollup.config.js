import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    vue(),
  ]
};