import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/chrono-bundle.js',
      format: 'iife',
      name: 'Chrono'
    },
    {
      file: 'dist/chrono-bundle.min.js',
      format: 'iife',
      name: 'Chrono',
      plugins: [terser()]
    }
  ],
  plugins: [
    typescript({
      exclude: ["**/__tests__", "**/*.test.ts", "test/**/*.*"],
      declaration: false,
      sourceMap: false,
    }),
    nodeResolve(),
    commonjs()
  ]
};