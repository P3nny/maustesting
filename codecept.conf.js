exports.config = {
  tests: './tests/**/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://programmieren.wdrmaus.de',
      show: true,
      chrome: {
        defaultViewport: {
          width: 1280,
          height: 900,
          deviceScaleFactor: 2,
        },
      },
    },
  },
  include: {
    I: './util/common.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}
