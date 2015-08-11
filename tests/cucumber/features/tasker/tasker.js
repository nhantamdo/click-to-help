(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I am a Tasker$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .call(callback);
    });

    this.When(/^move to List Task Screen$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
        .pause(5000)
        .call(callback);
    });

    this.When(/^I click notification$/, function(callback) {
      this.client
        .click('#btnNotification')
        .call(callback);
    });

    this.When(/^I see my notification$/, function(callback) {
      this.client
        .pause(5000)
        .call(callback);
    });

  };
})();
