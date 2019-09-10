@Login
Feature: Login
Background:
  Given I launch OrangeHRM application

  @ValidCredentials
  Scenario: verify valid credential
    When I sign in with username "Admin" and password "admin123"
    Then I should see dashbord page

  @InvalidCredentials
  Scenario: verify invalid credentials scenario 2
    When I sign in with username "Admin" and password "admin124"
    Then I should get error message "Invalid credentials"

  @InvalidCredentials
  Scenario: verify invalid credentials scenario 2
    When I sign in with username "Admin" and password "Admin123"
    Then I should get error message "Invalid credentials"