# Description: This is tasker test feature
# Author: linhnh
Feature: tasker test
  As a new comer
  I am a Tasker

  # The background will be run for every scenario
  Background:
    Given I am a Tasker

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I click button I'm a Tasker in Home page
    Then move to List Task Screen
