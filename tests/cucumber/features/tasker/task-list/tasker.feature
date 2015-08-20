# Description: This is tasker test feature
# Author: linhnh,truongtk
Feature: tasker test
  As a new comer
  I am a Tasker

  # The background will be run for every scenario
  Background:
    Given I am a Tasker in IntroPage

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I click button Become a Tasker in Intro page
    And display Task List Screen
    And I click Task item
    Then display Task Detail

    When I click button Back To List in Task Detail
    And I click icon Notification
    And I see list task on Notification List

    When I click Task Item on Notification List
    And display Task Detail Notification
    And I click button Accept Notification
    And this Task status change to accepted
    And I click Back To List
    Then I have that Task in Accepted Tab
