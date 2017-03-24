Feature: Test search from main page
    In order to search campers among cities
    As a user
    I want to be able to set city and get the list of results

    Scenario: Check the first result contains search query
        Given I open the site "/"
        When  I set "Stuttgart" to the inputfield ".geosuggest__input"
        Then  I wait on element ".geosuggest__suggests" for 2000ms to be visible
        When  I press "Enter"
        And   I click on the button ".search___1BSdH button"
        Then  I expect the url to contain "/wohnmobil-mieten"
        And   I wait on element ".row___2V98v li:first-child" for 10000ms to exist
        And   I expect that element ".row___2V98v li:first-child section.icons___1RWPX span:last-child span:last-child" contains the text "Stuttgart"

