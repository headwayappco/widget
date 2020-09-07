import commonjs from 'rollup-plugin-commonjs';
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
    input: 'src/index.js', // Path relative to package.json
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        buble(), // Transpile to ES5
    ],
};


