(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');

    this.Given(/^I want to post a task so I choose the service$/, function (callback) {
      this.client
        .url(process.env.ROOT_URL+"list-service")
        .waitForExist('body *')
        .waitForVisible('body *')
        .call(callback);
    });

    this.When(/^I tap service "([^"]*)"$/, function (arg1, callback) {
      this.client
          .waitForExist('#itemService')
          .waitForVisible('#itemService')
          .click('#itemService='+arg1)
          .call(callback);
    });

    this.Then(/^transfer to task\-input screen with service "([^"]*)"$/, function (arg1, callback) {
      this.client
      .url(function(err,res) {
        if (arg1=='House Cleaning') {
          assert.equal(res.value, process.env.ROOT_URL+'list-service/post-task?serviceId=001&serviceText=House%20Cleaning');
        } else if (arg1=='Home Massage') {
          assert.equal(res.value, process.env.ROOT_URL+'list-service/post-task?serviceId=002&serviceText=Home%20Massage');
        } else if (arg1=='Help Shopping') {
          assert.equal(res.value, process.env.ROOT_URL+'list-service/post-task?serviceId=003&serviceText=Help%20Shopping');
        } else if (arg1=='Baby Care') {
          assert.equal(res.value, process.env.ROOT_URL+'list-service/post-task?serviceId=004&serviceText=Baby%20Care');
        } else if (arg1=='Text Translate') {
          assert.equal(res.value, process.env.ROOT_URL+'list-service/post-task?serviceId=005&serviceText=Text%20Translate');
        }
      })
      .call(callback);
    });
  };
})();
