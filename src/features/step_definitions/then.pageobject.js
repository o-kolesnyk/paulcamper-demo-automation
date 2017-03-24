module.exports = function then() {
    this.Then(/^I see the first result in the list contains "([^"]*)"$/, (searchResult, done) => {
        pages.searchResultsPage.getLocationFromFirstSearchResult().should.to.contain(searchResult);
        done();
    });
};
