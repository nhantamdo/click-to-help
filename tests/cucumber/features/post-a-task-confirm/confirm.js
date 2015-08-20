(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');


    this.Given(/^I want to check and confirm information$/, function (callback) {
      this.client
      .url(process.env.ROOT_URL+"list-service/post-task-confirm?serviceId=001&serviceText=House%20Cleaning&description=Description&date=21%2F08%2F2015&time=08%3A00&duration=2&cost=12%2C345&address=104%20Mai%20Thi%20Luu%20Q.1%20TP.HCM&phone=0123456789&name=Trần%20Kim%20Trưởng&email=truongtk%40twin.vn")
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.Then(/^I check description "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#description span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check start Date "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#startDate span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check duration "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#duration span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check price "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#price span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check address "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#address span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check phone number "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#phoneNumber span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check name "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#name span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^I check email "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#email span:nth-Child(2)').then(function(value) {
        assert.equal(value,arg1);
      })
      .call(callback);
    });

    this.Then(/^click button Confirm$/, function (callback) {
      this.client
        .click('#Post')
        .call(callback);
    });


  };
})();
