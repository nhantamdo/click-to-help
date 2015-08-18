(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I am a new user$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .call(callback);
    });

    this.When(/^I click button Post a Task in Intro page$/, function (callback) {
      this.client
          .click("#btnPostTask")
          .call(callback);
    });

    this.When(/^display Post Task Screen$/, function (callback) {
      this.client
          .call(callback);
    });

    this.When(/^I choose a service$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
          .waitForExist('#itemService')
          .waitForVisible('#itemService')
          .click('#itemService')
          .call(callback);
    });

    this.When(/^I fill information "([^"]*)" in TextField Description and "([^"]*)" in TextField Cost$/, function (arg1, arg2, callback) {
      this.client
        .setValue('#txtDescription', arg1)
        .setValue('#txtCost', arg2)
        .call(callback);
    });

    this.When(/^I click Next button$/, function(callback) {
      this.client
          .pause(3000)
          .click('#btnNext')
          .call(callback);
    });

    this.When(/^I fill "([^"]*)" in TextField Address$/, function(arg1, callback) {
      this.client
        .setValue('#Address', arg1)
        .call(callback);

    });

    this.When(/^I fill "([^"]*)" in TextField Phone$/, function(arg1, callback) {
      this.client
        .setValue('#phoneNumber', arg1)
        .call(callback);
    });

    this.When(/^I fill "([^"]*)" in TextField Name$/, function (arg1, callback) {
      this.client
        .setValue('#name', arg1)
        .call(callback);
    });

    this.When(/^I click Post a task button$/, function(callback) {
      this.client
          .pause(3000)
          .click('#Post')
          .call(callback);
    });

    this.When(/^display Confirm Infomation Screen$/, function (callback) {
      this.client
          .call(callback);
    });

    this.When(/^I click button OK$/, function (callback) {
      this.client
          .pause(3000)
          .click("#Post")
          .call(callback);
    });

    this.Then(/^I have a task in database$/, function (callback) {
      this.client
          .call(callback);
    });

  };
})();
