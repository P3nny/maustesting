const startX = 350;
const startY = 200;
const blockH = 38;

const screenshotInterval = 100;

const delay = amount => new Promise(res => setTimeout(res, amount));

class MyPupeteer extends Helper {
  constructor() {
    super();

    this.captureInterval = null;
  }

  async startRecording({
    name = 'screen',
    interval = screenshotInterval,
    clip = null,
  }) {
    if (this.captureInterval) {
      return;
    }

    this.captureInterval = setInterval(async () => {
      try {
        const pup = this.helpers['Puppeteer'];
        await pup.page.screenshot({
          path: `screenshots/${name}_${new Date().toISOString()}.png`,
          clip,
        });
      } catch(e) {
        console.log("Recording cancelled because of", e.message)
        clearInterval(this.captureInterval);
        this.captureInterval = null;
      }
    }, interval);
    await delay(500);
  }

  async stopRecording() {
    if (!this.captureInterval) {
      return;
    }
    clearInterval(this.captureInterval);
    this.captureInterval = null;
    await delay(500);
  }

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
