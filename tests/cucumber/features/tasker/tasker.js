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

    this.Then(/^move to List Task Screen$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });
  };
})();
