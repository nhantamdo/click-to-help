(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I am a Asker$/, function (callback) {
      this.client
          .url(process.env.ROOT_URL + "ask-list")
          .waitForExist('body *')
          .waitForVisible('body *')
          .call(callback);
    });

    this.When(/^I click Service Icon or Description in Ask List Screen$/, function (callback) {
      this.client
          .waitForExist('#itemDescription')
          .waitForVisible('#itemDescription')
          .click("#itemDescription")
          .call(callback);
    });

    this.When(/^display Task Detail include Taskers who accepted this task\.$/, function (callback) {
      this.client
          .call(callback);
    });

    this.When(/^I choose one Tasker$/, function (callback) {
      this.client
          .click(".cbSelectTasker")
          .call(callback);
    });


    this.When(/^I click button Accept$/, function (callback) {
      this.client
          .pause(3000)
          .click("#btnAccept")
          .call(callback);
    });

    this.Then(/^Task Status will change to confirmed$/, function (callback) {
      this.client
          .call(callback);
    });
  };
})();
