export class HomePageTest {
  get beginButton() {
    return element(by.text('BEGIN'));
  }
  get trueButton() {
    return element(by.text('TRUE'));
  }
  get falseButton() {
    return element(by.text('FALSE'));
  }

  getPage(page) {
    return element(by.text(`${page} of 10`))
  }

  get playAgain() {
    return element(by.text('PLAY AGAIN?'))
  }

}
