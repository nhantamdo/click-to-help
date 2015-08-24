(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    var phone, password;

    this.Given(/^I am a Member$/, function (callback) {
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .call(callback);
    });

    this.When(/^I click button Login in Intro page$/, function (callback) {
      this.client
          .click("#btnLogin")
          .call(callback);
    });

    this.When(/^move to Login Screen$/, function (callback) {
      this.client
          .call(callback);
    });

    this.When(/^I input "([^"]*)" to Phone field and "([^"]*)" to Password field$/, function (arg1, arg2, callback) {
      phone = arg1;
      password = arg2;
      this.client
          .setValue("#txtPhone", arg1)
          .setValue("#txtPassword", arg2)
          .call(callback);
    });

    this.When(/^I click button Login in Login Page$/, function (callback) {
      this.client
          .pause(3000)
          .click("#btnLogin")
          .call(callback);
    });

    this.When(/^System will check user is an Asker or Tasker and redirect to same Page$/, function (callback) {
      this.client
          .call(callback);
    });

    this.Then(/^Login success$/, function (callback) {
      this.client
          .call(callback);
    });
  };
})();
