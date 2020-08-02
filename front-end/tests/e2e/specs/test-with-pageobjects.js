/// /////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
/// /////////////////////////////////////////////////////////////

// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'login test': function (browser) {

    browser
      .url(process.env.VUE_DEV_SERVER_URL + 'login')
      .waitForElementPresent('#app',5000)
      .end()

  }
}
