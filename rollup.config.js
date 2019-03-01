import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'dist/angular-pwa/service-worker.js',
  output: {
    file: 'dist/angular-pwa/service-worker.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser()
  ]
}
