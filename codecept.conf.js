exports.config = {
  tests: './tests/**/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://programmieren.wdrmaus.de',
      show: true,
    }
  },
  include: {
    I: './util/common.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}
