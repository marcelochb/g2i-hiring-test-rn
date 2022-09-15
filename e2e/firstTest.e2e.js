const { HomePageTest } = require("./pages/home");
const homePage = new HomePageTest();

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have BEGIN button', async () => {
    await expect(element(by.text('BEGIN'))).toBeVisible();
  });

  it('should answer 10 questions and show result', async () => {
    // await element(by.text('BEGIN')).tap();
    await homePage.clickButton();
    await expect(element(by.text('1 of 10'))).toBeVisible();
    await element(by.text('TRUE')).tap();
    await expect(element(by.text('2 of 10'))).toBeVisible();
    await element(by.text('FALSE')).tap();
    await expect(element(by.text('3 of 10'))).toBeVisible();
    await element(by.text('TRUE')).tap();
    await expect(element(by.text('4 of 10'))).toBeVisible();
    await element(by.text('FALSE')).tap();
    await expect(element(by.text('5 of 10'))).toBeVisible();
    await element(by.text('TRUE')).tap();
    await expect(element(by.text('6 of 10'))).toBeVisible();
    await element(by.text('FALSE')).tap();
    await expect(element(by.text('7 of 10'))).toBeVisible();
    await element(by.text('TRUE')).tap();
    await expect(element(by.text('8 of 10'))).toBeVisible();
    await element(by.text('FALSE')).tap();
    await expect(element(by.text('9 of 10'))).toBeVisible();
    await element(by.text('TRUE')).tap();
    await expect(element(by.text('10 of 10'))).toBeVisible();
    await element(by.text('FALSE')).tap();
    await expect(element(by.text('PLAY AGAIN?'))).toBeVisible();
  });


});
