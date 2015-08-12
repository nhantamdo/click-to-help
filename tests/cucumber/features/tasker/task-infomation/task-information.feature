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
    When I click the button I'm a Tasker
    And I click the notification button
    And I click the task "Massage tai nha"
    Then I see "Task information" and "Massage tai nha"
    When I click Skip button
    Then I see task list page
