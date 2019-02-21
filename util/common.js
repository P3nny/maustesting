module.exports = () => actor({
  amReturningVisitor: function() {
    this.amOnPage('/');
    this.executeScript(() => {
      localStorage.setItem('hasVisited', 'yes');
    });
  },
  dragBlock: async function(id, num = 0) {
    await this.dragToWorkspace(`[data-id=${id}]`, num);
  },
});
