(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I am a new user$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions      
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.When(/^I choose a service$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
      .click('#itemService')
      .call(callback);
    });

    this.When(/^I fill information "([^"]*)" in TextField Description$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions

      this.client
      .setValue('#txtDescription', arg1)
      //.setValue('#sliderDuration', 3)
      .setValue('#txtCost', 500)
      .call(callback);
    });

    this.When(/^I click Next button$/, function (callback) {
      this.client
      .click('#btnNext')
      .call(callback);
    });

    this.When(/^I fill "([^"]*)" in TextField Address$/, function (arg1, callback) {
      this.client
      .setValue('#Address', arg1)
      .call(callback);

    });

    this.When(/^I fill "([^"]*)" in TextField Phone$/, function (arg1, callback) {
      this.client
      .setValue('#phoneNumber', arg1)
      .call(callback);
    });

    this.When(/^I fill "([^"]*)" in TextField FullName$/, function (arg1, callback) {
      this.client
      .setValue('#name', arg1)
      .call(callback);
    });

    this.When(/^I click Post a task button$/, function (callback) {
      this.client
      .click('#Post')
      .call(callback);
    });

    this.Then(/^have that task "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" in database$/, function (arg1, arg2, arg3, arg4, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

  };
})();
