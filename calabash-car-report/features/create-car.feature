Feature: Create a Car

  Scenario: As a user I want to be able to create a car
    Given I press "btn_create_car"
    When I should see "Add car"
    And I enter text "Camioneta Ford Explorer" into field with id "edt_name"
    And I clear input field with id "edt_initial_mileage"
    And I enter text "100" into field with id "edt_initial_mileage"
    And I press "menu_save"
    And I wait for 1 seconds
    Then I should see "Reports"

  Scenario: As a user I want to fill fuel consumption
    Given I see the text "Fuel consumption"
    And I press image button number 6
    And I wait for 1 second
    And I press image button number 8
    When I should see "Add refueling"
    And I enter text "11" into field with id "edt_mileage"
    And I enter text "2" into field with id "edt_volume"
    And I enter text "5" into field with id "edt_price"
    And I press "menu_save"
    Then I should see "Reports"

  Scenario: As a user I want to fill other expenditures
    Given I see the text "Fuel consumption"
    And I press image button number 6
    And I wait for 1 second
    And I press image button number 7
    When I should see "Add other expenditure"
    And I enter text "1 lata de aceite havoline" into field with id "edt_title"
    And I enter text "20" into field with id "edt_mileage"
    And I enter text "2" into field with id "edt_price"
    And I press "menu_save"
    Then I should see "Reports"

  Scenario: As a user I want to fill other incomes
    Given I see the text "Fuel consumption"
    When I press image button number 6
    And I wait for 1 second
    And I press image button number 5
    And I should see "Add other income"
    And I enter text "2 Llantas goodyear" into field with id "edt_title"
    And I enter text "20" into field with id "edt_mileage"
    And I enter text "100" into field with id "edt_price"
    And I press "edt_date"
    And I wait for 1 second
    And I press view with id "month_view"
    And I press "OK"
    And I wait for 1 second
    And I press "menu_save"
    Then I should see "Reports"

  Scenario: As a user I want to see the history of the car
    Given I see the text "Fuel consumption"
    When I press image button number 1
    And I should see "Camioneta Ford Explorer"
    And I press "Camioneta Ford Explorer"
    Then I should see "REFUELINGS"
    And I wait for 3 seconds
