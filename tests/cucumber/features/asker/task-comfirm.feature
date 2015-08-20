# Description: This is test case of task confirmation
# Author: toanpp
Feature: Task information test
  As an Asker

  # The background will be run for every scenario
  Background:
    Given I am an Asker in Waiting list of task

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I click the task "Massage tai nha" in waiting list.
    #Then I see "Confirming" and "Massage tai nha" in confirming
    #When I click check box
    #And I click accept button to confirm
    #Then I see result "Accept succesful!"
    #And I go back to Comfirmed list
