Feature: Test search from main page
    In order to search campers among cities
    As a user
    I want to be able to set city and get the list of results

    Scenario: Check the first result contains search query
        Given I am on the Main page
        When  I search for "Stuttgart" city
        And   I click Search button
        Then  I see the first result in the list contains "Stuttgart"

