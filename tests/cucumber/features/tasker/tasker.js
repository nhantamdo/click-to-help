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

    this.When(/^move to List Task Screen$/, function (callback) {
      this.client
      .call(callback);
    });

    this.Then(/^display tasks which status is accepted in the first Tab$/, function (callback) {
      this.client
      .call(callback);
    });

    this.When(/^I click Tab Confirmed$/, function (callback) {
      callback.pending();
    });

    this.Then(/^display tasks which status is confirmed in the second Tab$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });
  };
})();
