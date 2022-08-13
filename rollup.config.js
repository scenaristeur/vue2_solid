import vue from 'rollup-plugin-vue'
import alias from 'rollup-plugin-alias';
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
      vue(), peerDepsExternal(),
      alias({
        'vue$': __dirname + 'node_modules/vue/dist/vue.runtime.esm.js'
      })
    ]
  }
]
