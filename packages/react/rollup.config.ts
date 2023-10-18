// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

const config = {
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Margin/index.ts',
    'src/atoms/Select/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    typescript({
      compilerOptions: {
        lib: ['es5', 'es6', 'dom'],
        target: 'es5',
        outDir: 'lib',
      },
    }),
    commonjs(),
  ],
  external: ['react', '@ds.ag/foundation'],
}

export default config
