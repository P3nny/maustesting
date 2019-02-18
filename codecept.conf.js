exports.config = {
  tests: './src/**/*_test.js',
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
    MyHelper: {
      require: "./mypupeteer_helper.js",
    },
  },
  include: {
    I: './common.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}
