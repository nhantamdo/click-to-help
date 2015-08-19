# Description: This is tasker test feature
# Author: linhnh,truongtk
Feature: tasker test
  As a new comer
  I am a Asker

  # The background will be run for every scenario
  Background:
    Given I am a Asker

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I click Service Icon or Description in Ask List Screen
    And display Task Detail include Taskers who accepted this task.

    When I choose one Tasker
    And I click button Accept
    Then Task Status will change to confirmed
