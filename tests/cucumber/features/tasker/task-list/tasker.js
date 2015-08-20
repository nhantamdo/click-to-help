(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    var haveTaskItem = false;
    var haveTaskItemNotification = false;

    this.Given(/^I am a Tasker in IntroPage$/, function (callback) {
      this.client
          .url(process.env.ROOT_URL)
          .waitForExist('body *')
          .waitForVisible('body *')
          .call(callback);
    });

    this.When(/^I click button Become a Tasker in Intro page$/, function (callback) {
      this.client
          .click("#btnBecomeTasker")
          .call(callback);
    });

    this.When(/^display Task List Screen$/, function (callback) {
      var client = this.client;
      client.waitForExist('#taskListAccepted')
            .waitForVisible('#taskListAccepted')
            .isExisting('#taskListAccepted .itemTask').then(function(isExisting) {
              haveTaskItem = isExisting;
              client.call(callback);
            });
    });

    this.When(/^I click Task item$/, function (callback) {
      if(haveTaskItem){
        this.client
            .pause(3000)
            .click("#taskListAccepted .itemTask")
            .call(callback);
      }
      else {
        this.client
            .pause(3000)
            .call(callback);
      }
    });

    this.Then(/^display Task Detail$/, function (callback) {
      this.client
          .call(callback);
    });

    this.When(/^I click button Back To List in Task Detail$/, function (callback) {
      if(haveTaskItem){
        this.client
            .pause(3000)
            .click("#btnBack")
            .call(callback);
      }
      else {
        this.client.pause(3000).call(callback);
      }
    });

    this.When(/^I click icon Notification$/, function (callback) {
      this.client
          .click('#btnNotification')
          .call(callback);
    });

    this.When(/^I see list task on Notification List$/, function (callback) {
      var client = this.client;
      client.waitForExist('#notification')
            .waitForVisible('#notification')
            .isExisting('#notification .itemTask').then(function(isExisting) {
              haveTaskItemNotification = isExisting;
              client.call(callback);
            });
    });

    this.When(/^I click Task Item on Notification List$/, function (callback) {
      if(haveTaskItemNotification){
        this.client
            .pause(3000)
            .click("#notification .itemTask")
            .call(callback);
      }
      else {
        this.client.pause(3000).call(callback);
      }
    });

    this.When(/^display Task Detail Notification$/, function (callback) {
      this.client.call(callback);
    });

    this.When(/^I click button Accept Notification$/, function (callback) {
      if(haveTaskItemNotification){
        this.client
            .pause(3000)
            .click("#btnGetIt")
            .call(callback);
      }
      else {
        this.client.pause(3000).call(callback);
      }
    });

    this.When(/^this Task status change to accepted$/, function (callback) {
      this.client.call(callback);
    });

    this.When(/^I click Back To List$/, function (callback) {
      if(haveTaskItemNotification){
        this.client
            .waitForExist('#btnBack')
            .waitForVisible('#btnBack')
            .click("#btnBack")
            .call(callback);
      }
      else {
        this.client.call(callback);
      }
    });

    this.Then(/^I have that Task in Accepted Tab$/, function (callback) {
      this.client.call(callback);
    });
  };
})();
