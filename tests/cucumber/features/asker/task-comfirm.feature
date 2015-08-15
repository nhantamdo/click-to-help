# Description: This is test case of task confirmation
# Author: toanpp
Feature: Task information test
  As an Asker

  # The background will be run for every scenario
  Background:
    Given I am an Asker

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I click the button Login
    And I click the task "Massage tai nha"
    Then I see "Confirming" and "Massage tai nha"
    When I click check box
    Then I see task list page
  #@dev
  Scenario:
    When I click the button Become a Takser
    And I click the notification button
    And I click the task "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách"
    Then I see "Task information" and "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách"
    #And I click Accept button
    #And I see "Accept succesful"
    #And I click "Back to Tasks list"
    #And I see Tab Accepted in Taks list
