const startX = 350;
const startY = 200;
const blockH = 38;

class MyPupeteer extends Helper {
  async dragToWorkspace(selector, num = 0) {
    const pup = this.helpers['Puppeteer'];
    const { mouse } = pup.page;

    const elements = await pup._locate(selector);
    if (elements.length !== 1) {
      throw new Error(`Unable to find singular target. Elements found: ${elements.length}`);
    }
    const element = elements[0];

    const { x, y, width, height } = await element.boundingBox();
    const mouseX = x+width/2;
    const mouseY = y+height/2;
    await mouse.move(mouseX, mouseY);
    await mouse.down();
    await mouse.move(startX, startY + (blockH*num));
    await mouse.up();
  }
}

module.exports = MyPupeteer;
