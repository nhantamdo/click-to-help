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
    When I click button Login(test, this flow will change later) in Intro page
    Then display Task List(status: accepted) in Screen Asker

    When I click Comfirmed Tab
    Then display Task List(status: comfirmed) in Screen Asker
