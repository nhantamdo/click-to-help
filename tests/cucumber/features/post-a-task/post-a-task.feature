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
    And I fill information "Description Demo" in TextField Description and "500000" in TextField Cost
    And I click Next button
    And I fill "104 Mai Thi Luu" in TextField Address
    And I fill "0903727390" in TextField Phone
    And I fill "Nguyen Linh" in TextField Name
    And I click Post a task button
    And display Confirm Infomation Screen
    And I click button OK
    Then I have a task in database
