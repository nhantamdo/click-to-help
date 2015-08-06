# Description: This is sign up test feature
# Author: Toanpp
Feature: Sign up test
  As a new comer
  I want to register for an account using my email and password
  so that I can log in and use the application.

  # The background will be run for every scenario
  Background:
    Given I am a new comer

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I fill my information with email: "toanpp@twin.vn", password: "123456", confirm: "123456"
    Then I click Create account button
    And I shoud see "toanpp@twin.vn"
