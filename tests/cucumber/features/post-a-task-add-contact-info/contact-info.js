(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I want to add contact info$/, function (callback) {
      this.client
      .url(process.env.ROOT_URL+"list-service/fill-info?serviceId=001&serviceText=House%20Cleaning&description=Description&date=21%2F08%2F2015&time=08%3A00&duration=2&cost=12%2C345")
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.When(/^I fill address "([^"]*)"$/, function (arg1, callback) {
      this.client
      .setValue('#Address', arg1)
      .call(callback);
    });

    this.When(/^I fill phone number "([^"]*)"$/, function (arg1, callback) {
      this.client
      .setValue('#phoneNumber', arg1)
      .call(callback);
    });

    this.When(/^I fill name "([^"]*)"$/, function (arg1, callback) {
      this.client
      .setValue('#name', arg1)
      .call(callback);
    });

    this.When(/^I fill email "([^"]*)"$/, function (arg1, callback) {
      this.client
      .setValue('#email', arg1)
      .call(callback);
    });

    this.When(/^I click button Post Task$/, function (callback) {
      this.client
      .click('#Post')
      .call(callback);
    });

    this.Then(/^transfer to task\-post\-confirm screen/, function (callback) {
      this.client
        .url(function(err,res){
          assert.equal(res.value, process.env.ROOT_URL+"list-service/post-task-confirm?serviceId=001&serviceText=House%20Cleaning&description=Description&date=21%2F08%2F2015&time=08%3A00&duration=2&cost=12%2C345&address=104%20Mai%20Thi%20Luu%20Q.1%20TP.HCM&phone=0123456789&name=Tr%E1%BA%A7n%20Kim%20Tr%C6%B0%E1%BB%9Fng&email=truongtk%40twin.vn");
        })
        .call(callback);
    });
  };
})();
