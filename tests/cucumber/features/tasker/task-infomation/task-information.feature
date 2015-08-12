# Description: This is test case of task information
# Author: toanpp
Feature: Task information test
  As a new comer
  I am a Tasker

  # The background will be run for every scenario
  Background:
    Given I am a Tasker

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I click button I'm a Tasker in Home page
    And move to List Task Screen
    Then display tasks which status is accepted in the first Tab
    And I click notification
    Then I see my notification

  @dev
  Scenario:
    When I click button I'm a Tasker in Home page
    And I click Tab Confirmed
    Then display tasks which status is confirmed in the second Tab
