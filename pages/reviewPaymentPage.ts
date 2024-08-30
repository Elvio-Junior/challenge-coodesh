import { type Locator, type Page, expect } from "@playwright/test";

export class ReviewPaymentPage {
  readonly page: Page;
  readonly elements: {
    title: Locator;
    placeOrder: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.elements = {
      title: page.getByText('Payment Method'),
      placeOrder: page.getByRole('button', { name: 'Place Order' })
    };
  }

  async assertElements(){
    await expect(this.elements.placeOrder).toBeVisible();
  };
}