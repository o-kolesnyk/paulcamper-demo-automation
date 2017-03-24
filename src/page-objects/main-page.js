'use strict';

const Page = require('./page');

const pagePath = '/';

const searchFieldInputSelector = '.geosuggest__input';
const suggestionDropdownSelector = '.geosuggest__suggests';
const searchButtonSelector = '.search___1BSdH button';
/**
 * The MainPage class
 */
class MainPage extends Page {
    /**
     * Method to initialize page by setting path
     */
    _initializePage() {
        this.pagePath = pagePath;
    }

    /**
     * Selector for search input field
     */
    get searchFieldInput() {
        return browser.element(searchFieldInputSelector);
    }

    /**
     * Selector for search button
     */
    get searchButton() {
        return browser.element(searchButtonSelector);
    }

    /**
     * Method to set search query in input field
     * @param {String} value Search Value
     */
    setSearchValue(value) {
        this.searchFieldInput.setValue(value);
        browser.element(suggestionDropdownSelector).waitForVisible(2000);
        this.searchFieldInput.keys('Enter');
    }

    /**
     * Method to press search button
     */
    pressSearchButton() {
        this.searchButton.click();
    }
}

module.exports = new MainPage();
