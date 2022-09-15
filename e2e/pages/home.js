export class HomePageTest {
  get beginButton() {
    return element(by.text('BEGIN'));
  }
  async clickButton() {
    await this.beginButton.tap();
  }
}
