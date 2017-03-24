'use strict';

const pagePath = undefined;

const progressBarSelector = '.line__2MJGL';
/**
 * The Page class
 */
class Page {

    /**
     * The constructor
     */
    constructor() {
        this._initializePage();
    }

    /**
     * Method to initialize page by setting path
     */
    _initializePage() {
        this.pagePath = pagePath;
    }

    /**
     * Method to create full page path
     */
    get pageUrl() {
        return browser.options.baseUrl + this.pagePath;
    }

    /**
     * Method to visit specified page
     */
    visit() {
        browser.url(this.pageUrl);
    }

    /**
     * Method to check that a page is loaded
     */
    checkPageLoaded() {
        const progressBar = browser.element(progressBarSelector);
        browser.waitUntil(() => browser.getUrl().includes(this.pageUrl),
            10000, 'Page URL is not as expected');

        browser.waitUntil(() => !progressBar.getAttribute('style').includes('width: 0%'),
            10000, 'Page didn\'t start loading');

        browser.waitUntil(() => progressBar.getAttribute('style').includes('width: 0%'),
            10000, 'Page is not loaded');
    }
}
module.exports = Page;
