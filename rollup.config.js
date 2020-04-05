import pkg from './package.json';

import babelPlugin from 'rollup-plugin-babel';
import commonjsPlugin from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: `./dist/${pkg.name}.js`,
    format: 'cjs'
  },
  //this specifies that the package dependencies should be excluded
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
    //transpiles all of our files with babel
    babelPlugin({ exclude: 'node_modules/**' }),

    //allows for commonjs modules to be used
    commonjsPlugin(),
  ]
};