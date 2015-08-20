# Description: This is post a task - confirm
# Author: truongtk
Feature: Post a task step 4 - confirm
  As a new comer
  I want to post a task
  so that I need to confirm all information

  # The background will be run for every scenario
  Background:
    Given I am a new user
    And I want to check and confirm information

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    Then I check description "Description"
    And I check start Date "08:00 21/08/2015"
    And I check duration "2h"
    And I check price "12,345 VND"
    And I check address "104 Mai Thi Luu Q.1 TP.HCM"
    And I check phone number "0123456789"
    And I check name "Trần Kim Trưởng"
    And I check email "truongtk@twin.vn"
    And click button Confirm
