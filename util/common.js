module.exports = () => actor({
  amReturningVisitor: function() {
    this.amOnPage('/');
    this.executeScript(() => {
      localStorage.setItem('hasVisited', 'yes');
    });
  },
});
