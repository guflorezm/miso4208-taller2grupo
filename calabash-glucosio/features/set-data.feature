Feature: Set basic data

  Scenario: As a user I want to be able to set my data
    Given I see "Country"
    When I enter text "44" into field with id "activity_hello_age"
    And I go back
    And I scroll down
    And I should see "GET STARTED"
    Then I press "activity_hello_button_start"
    And I should see "Glucosio"

  Scenario: As a user I want to fill blood glucose level
    Given I press "activity_main_fab_add_reading"
    When I see "Add new reading"
    And I touch the "Blood Glucose Level" text
    And I wait for 1 second
    And I enter text "160" into field with id "glucose_add_concentration"
    And I go back
    And I press "custom_spinner"
    And I press list item number 2
    And I enter text "Comi chocolates" into field with id "glucose_add_notes"
    And I press "done_fab"
    Then I should see "OVERVIEW"

  Scenario: As a user I want to fill body weight
    Given I press "activity_main_fab_add_reading"
    When I see "Add new reading"
    And I touch the "Body Weight" text
    And I wait for 1 second
    And I enter text "100" into field with id "weight_add_value"
    And I press "done_fab"
    Then I should see "OVERVIEW"

  Scenario: As a user I want to fill blood pressure
    Given I press "activity_main_fab_add_reading"
    When I see "Add new reading"
    And I press "Blood Pressure" 
    And I wait for 1 second
    And I enter text "120" into field with id "pressure_add_value_max"
    And I enter text "80" into field with id "pressure_add_value_min"
    And I press "done_fab"
    Then I should see "OVERVIEW"

 Scenario: As a user I want to fill ketones
    Given I press "activity_main_fab_add_reading"
    When I see "Add new reading"
    And I touch the "Ketones" text
    And I wait for 1 second
    And I enter text "4.3" into field with id "ketone_add_value"
    And I press "done_fab"
    Then I should see "OVERVIEW"
