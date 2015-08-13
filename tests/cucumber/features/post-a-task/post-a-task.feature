# Description: This is post a task test feature
# Author: truongtk
Feature: Post a task test
  As a new comer
  I want to post a task
  so that I fill the information

  # The background will be run for every scenario
  Background:
    Given I am a new user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  #@dev
  Scenario:
    When I click button Post a Task in Intro page
    And display Post Task Screen
    And I choose a service
    And I fill information "Description" in TextField Description
    And I click Next button
    And I fill "Address" in TextField Address
    And I fill "Phone number" in TextField Phone
    And I fill "Full Name" in TextField FullName
    And I click Post a task button
    Then have that task "Description" "Address" "Phone number" "Full Name" in database
