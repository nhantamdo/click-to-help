# Description: This is Login test feature
# Author: linhnh
Feature: Login test
  As a Member
  I want to Login
  so that I input Phone and Password

  # The background will be run for every scenario
  Background:
    Given I am a Member

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I click button Login in Intro page
    And move to Login Screen
    And I input "0903727390" to Phone field and "123456" to Password field
    And I click button Login in Login Page
    And System will check user is an Asker or Tasker and redirect to same Page
    Then Login success
