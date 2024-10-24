
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./eleventy-plugin-shiki-twoslash.cjs.production.min.js')
} else {
  module.exports = require('./eleventy-plugin-shiki-twoslash.cjs.development.js')
}
