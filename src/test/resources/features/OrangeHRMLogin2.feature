@Login
Feature: Login

  @ValidCredentials
  Scenario: verify valid credential
    Given I launch OrangeHRM application
    When I sign in with username "Admin" and password "admin123"
    Then I should see dashbord page

  @InvalidCredentials
  Scenario Outline: verify invalid credentials scenario 2
    Given I launch OrangeHRM application
    When I sign in with username "<username>" and password "<password>"
    Then I should get error message "Invalid credentials"
    Examples:
      | username | password |
      | Admin    | admin124 |
      | admin    | Admin123 |