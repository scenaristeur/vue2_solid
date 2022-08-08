import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/vue2_solid.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/vue2_solid.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal()
    ]
  }
]
