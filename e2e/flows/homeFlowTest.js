import { HomeActionsTest } from "../actions/homeAcionsTest"

export class HomeFlowTest {
  #actions
  constructor(){
    this.#actions = new HomeActionsTest();
  }
  async happyFlow() {
    await this.#actions.clickBegin();
    await expect(this.#actions.findPage('1')).toBeVisible();
    await this.#actions.clickTrue();
    await expect(this.#actions.findPage('2')).toBeVisible();
    await this.#actions.clickFalse();
    await expect(this.#actions.findPage('3')).toBeVisible();
    await this.#actions.clickTrue();
    await expect(this.#actions.findPage('4')).toBeVisible();
    await this.#actions.clickFalse();
    await expect(this.#actions.findPage('5')).toBeVisible();
    await this.#actions.clickTrue();
    await expect(this.#actions.findPage('6')).toBeVisible();
    await this.#actions.clickFalse();
    await expect(this.#actions.findPage('7')).toBeVisible();
    await this.#actions.clickTrue();
    await expect(this.#actions.findPage('8')).toBeVisible();
    await this.#actions.clickFalse();
    await expect(this.#actions.findPage('9')).toBeVisible();
    await this.#actions.clickTrue();
    await expect(this.#actions.findPage('10')).toBeVisible();
    await this.#actions.clickFalse();
    await expect(this.#actions.resultPage()).toBeVisible();

  }
}
