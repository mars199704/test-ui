// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import typescript from '@rollup/plugin-typescript'
// import dts from 'rollup-plugin-dts'

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: 'dist/cjs/index.js',
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: 'dist/esm/index.js',
//         format: 'esm',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//     ],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts()],
//   },
// ]

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'refined-components',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-native': 'reactNative',
      },
    },
    plugins: [commonjs(), nodeResolve(), typescript()],
    external: ['react', 'react-native'],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-native': 'reactNative',
        },
      },
      {
        file: 'dist/es/index.js',
        format: 'es',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-native': 'reactNative',
        },
      },
    ],
    plugins: [commonjs(), nodeResolve(), typescript()],
    external: ['react', 'react-native'],
  },
]
