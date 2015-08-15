(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I am a Asker$/, function (callback) {
      this.client
          .url(process.env.ROOT_URL)
          .waitForExist('body *')
          .waitForVisible('body *')
          .call(callback);
    });

    this.When(/^I click button Login\(test, this flow will change later\) in Intro page$/, function (callback) {
      this.client
          .click('#btnLogin')
          .call(callback);
    });

    this.Then(/^display Task List\(status: accepted\) in Screen Asker$/, function (callback) {
      this.client
          .pause(3000)
          .call(callback);
    });

    this.When(/^I click Comfirmed Tab$/, function (callback) {
      this.client
          .click('div=Confirmed')
          .call(callback);
    });

    this.Then(/^display Task List\(status: comfirmed\) in Screen Asker$/, function (callback) {
      this.client
          .call(callback);
    });
  };
})();
