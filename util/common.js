const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

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
  convertRecording: async function(name = 'screen', delay = 80) {
    const files = await fs.readdir('screenshots');
    console.log(files);
    const pngs = files
      .filter(file => file.startsWith(`${name}_`))
      .map(file => `screenshots/${file}`);
    await exec(`convert -delay ${delay} -loop 0 ${pngs.join(' ')} screenshots/${name}.gif`);
  },
});
