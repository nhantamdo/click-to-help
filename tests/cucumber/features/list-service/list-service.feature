# Description: Test list of service
# Author: truongtk
Feature: Post a task test
  As a new comer
  I want to post a task
  so that I choose the service

  # The background will be run for every scenario
  Background:
    Given I am a new user
    And I want to post a task so I choose the service

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I click service "House Cleaning"
    Then transfer to task input screen
