# Description: This is post a task test feature
# Author: truongtk
Feature: Sign up test
  As a new comer
  I want to post a task
  so that I fill the information

  # The background will be run for every scenario
  Background:
    Given I am a new user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
