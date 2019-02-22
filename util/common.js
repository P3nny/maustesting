module.exports = () => actor({
  amReturningVisitor: function() {
    this.amOnPage('/');
    this.executeScript(() => {
      localStorage.setItem('hasVisited', 'yes');
    });
  },
  dragBlock: function(id, num = 0) {
    this.dragToWorkspace(`[data-id=${id}]`, num);
  },
  selectCategory: function(name) {
    this.click(`.scratchCategoryId-${name}`)
    this.wait(1)
  },
});
