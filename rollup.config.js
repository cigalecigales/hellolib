// for minify
import { terser as pluginTerser } from 'rollup-plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
// for require/exports
import pluginCommonjs from '@rollup/plugin-commonjs';
// for third-party libraries
import pluginNodeResolve from '@rollup/plugin-node-resolve';
// for transpile
import { babel as pluginBabel } from '@rollup/plugin-babel';
import * as path from 'path';

import pkg from './package.json';


// Remove scope
const moduleName = pkg.name.replace(/^@.*\//, '');
const inputFileName = 'src/index.ts';

// license banner
const banner = `
  /**
   * @license
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} License.
   */
`;

export default [
  // for browser
  {
    input: inputFileName,
    output: [
      // uncompressed
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner
      },
      // minified
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [
          pluginTerser(),
        ],
      }
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        // search for files other than .js files (must already be transpiled by a previous plugin!)
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        // bundle for browser
        browser: true,
      }),
    ],
  },

  // for ES Module
  {
    input: inputFileName,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named', // TODO what??
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
    ],
  },

  // for CommonJS
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        // exports: 'default',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
    ],
  },
];
