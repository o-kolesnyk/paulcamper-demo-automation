'use strict';

const Page = require('./page');

const pagePath = '/wohnmobil-mieten';

const searchResultsSelector = '.row___2V98v li';
const locationElementOnItem = 'section.icons___1RWPX span:last-child span:last-child';
/**
 * The SearchResultsPage class
 */
class SearchResultsPage extends Page {
    /**
     * Method to initialize page by setting path
     */
    _initializePage() {
        this.pagePath = pagePath;
    }

    /**
     * Selector for search results
     */
    get searchResultsList() {
        return browser.elements(searchResultsSelector).value;
    }

    /**
     * Method to get location from first search result
     * @returns {String} Location
     */
    getLocationFromFirstSearchResult() {
        return this.searchResultsList[0].element(locationElementOnItem).getText();
    }
}

module.exports = new SearchResultsPage();
