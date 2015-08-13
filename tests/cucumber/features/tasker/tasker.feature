# Description: This is tasker test feature
# Author: linhnh,truongtk
Feature: tasker test
  As a new comer
  I am a Tasker

  # The background will be run for every scenario
  Background:
    Given I am a Tasker

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I click button Become a Tasker in Intro page
    Then display Task List Screen
