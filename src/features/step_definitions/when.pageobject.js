module.exports = function when() {
    this.When(/^I search for "([^"]*)" city$/, (searchString, done) => {
        pages.mainPage.setSearchValue(searchString);
        done();
    });

    this.When(/^I click Search button$/, (done) => {
        pages.mainPage.pressSearchButton();
        pages.searchResultsPage.checkPageLoaded();
        done();
    });
};
