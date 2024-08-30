import { type Locator, type Page, expect } from "@playwright/test";

export class ReviewProductPage {
  readonly page: Page;
  readonly elements: {
    nickName: Locator;
    summary: Locator;
    review: Locator;
    submitReview: Locator;
    stars: {
      one: Locator;
      two: Locator;
      three: Locator;
      four: Locator;
      five: Locator;
    };
    message: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.elements = {
      nickName: page.getByLabel("Nickname"),
      summary: page.getByLabel("Summary"),
      review: page.getByLabel("Review", { exact: true }),
      submitReview: page.getByRole('button', { name: 'Submit Review' }),
      stars: {
        one: page.getByTitle('1 star'),
        two: page.getByTitle('2 star'),
        three: page.getByTitle('3 star'),
        four: page.getByTitle('4 star'),
        five: page.getByTitle('5 star'),
      },

      message: page.getByText("You submitted your review for"),
    };
  }

  async assertElements() {
    await expect(this.elements.message).toBeVisible();
  }

  async fillFieldValue(registerLocator: Locator, value: string) {
    await registerLocator.clear();
    await registerLocator.fill(value);
  }

  async registerReview(nickName: string, summary: string, review: string) {
    await this.fillFieldValue(this.elements.nickName, nickName);
    await this.fillFieldValue(this.elements.summary, summary);
    await this.fillFieldValue(this.elements.review, review);
  }

  async choose2Stars() {
    await this.elements.stars.one.click();
    await this.elements.stars.two.click();
  }
}
