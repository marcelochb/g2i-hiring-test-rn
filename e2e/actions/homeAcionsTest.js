import { HomePageTest } from "../pages/homePageTest";

export class HomeActionsTest {
  #page;
  constructor(){
    this.#page = new HomePageTest();
  }
  async clickBegin() {
    await this.#page.beginButton.tap();
  }
  async clickTrue() {
    await this.#page.trueButton.tap();
  }
  async clickFalse() {
    await this.#page.falseButton.tap();
  }
  findPage(page) {
    return this.#page.getPage(page)
  }
  resultPage() {
    return this.#page.playAgain;
  }
}
