import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV

const config = {
  input: 'index.js',
  plugins: [],
}

if (env === 'development' || env === 'production') {
  config.output = { format: 'umd', name: 'style-stringify' }
  config.plugins.push(babel({
    exclude: 'node_modules/**',
  }))
}

if (env === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }))
}

module.exports = config
