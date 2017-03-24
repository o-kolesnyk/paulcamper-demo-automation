module.exports = function given() {
    this.Given(
        /^I am on the Main page$/, (done) => {
            pages.mainPage.visit();
            done();
        });
};
