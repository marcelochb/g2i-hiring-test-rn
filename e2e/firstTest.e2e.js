const { HomeFlowTest } = require("./flows/homeFlowTest");
const flow = new HomeFlowTest();

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should answer 10 questions and show result', async () => {
    await flow.happyFlow();
  });


});
