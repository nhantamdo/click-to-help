# Description: This is post a task - choose service test
# Author: truongtk
Feature: Post a task step 1 - choose service
  As a new comer
  I want to post a task
  so that I need to choose the service

  # The background will be run for every scenario
  Background:
    Given I am a new user
    And I want to post a task so I choose the service

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I tap service "House Cleaning"
    Then transfer to task-input screen with service "House Cleaning"
  #@dev
  Scenario:
    When I tap service "Home Massage"
    Then transfer to task-input screen with service "Home Massage"
  #@dev
  Scenario:
    When I tap service "Help Shopping"
    Then transfer to task-input screen with service "Help Shopping"
  #@dev
  Scenario:
    When I tap service "Baby Care"
    Then transfer to task-input screen with service "Baby Care"
  #@dev
  Scenario:
    When I tap service "Text Translate"
    Then transfer to task-input screen with service "Text Translate"
