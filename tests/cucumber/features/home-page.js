(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.When(/^I click button Post a Task in Home page$/, function(callback) {
      this.client
        .click('#btnPostTask')
        .call(callback);
    });

    this.When(/^I click button I'm a Tasker in Home page$/, function(callback) {
      this.client
        .click('#btnTasker')
        .call(callback);
    });
  };
})();
