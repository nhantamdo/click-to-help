# Description: This is post a task - add contact info
# Author: truongtk
Feature: Post a task step 3 - add contact info
  As a new comer
  I want to post a task
  so that I need to add contact info

  # The background will be run for every scenario
  Background:
    Given I am a new user
    And I want to add contact info

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I fill address "104 Mai Thi Luu Q.1 TP.HCM"
    And I fill phone number "0123456789"
    And I fill name "Trần Kim Trưởng"
    And I fill email "truongtk@twin.vn"
    And I click button Post Task
    Then transfer to task-post-confirm screen
