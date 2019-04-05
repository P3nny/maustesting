exports.config = {
  tests: './tests/**/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'localhost:8601',
      show: true,
      chrome: {
        defaultViewport: {
          width: 1280,
          height: 900,
          deviceScaleFactor: 2,
        },
      },
    },
    MyPuppeteer: {
      require: "./util/mypuppeteer_helper.js",
    },
  },
  include: {
    I: './util/common.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}
