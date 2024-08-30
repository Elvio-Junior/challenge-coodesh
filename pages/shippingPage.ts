import { type Locator, type Page, expect } from "@playwright/test";

export class ShippingPage {
  readonly page: Page;
  readonly elements: {
    title: Locator;
    streetAddress: Locator;
    city: Locator;
    state: Locator;
    postalCode: Locator;
    phoneNumber: Locator;
    shippingMethods: Locator;
    nextButton: Locator
  };

  constructor(page: Page) {
    this.page = page;
    this.elements = {
      title: page.getByText('Shipping Address'),
      streetAddress: page.getByLabel('Street Address: Line 1'),
      city: page.getByLabel('City'),
      state: page.locator('select[name="region_id"]'),
      postalCode: page.getByLabel('Zip/Postal Code'),
      phoneNumber: page.getByLabel('Phone Number'),
      shippingMethods: page.getByLabel('Fixed'),
      nextButton: page.getByRole('button', { name: 'Next' })
    };
  }

  async fillFieldValue(registerLocator: Locator, value: string) {
    await registerLocator.clear();
    await registerLocator.fill(value);
  }

  async registerShipping(streetAddress: string, city: string, postalCode: number, phoneNumber: string) {
    await this.fillFieldValue(this.elements.streetAddress, streetAddress);
    await this.fillFieldValue(this.elements.city, city);
    await this.elements.state.selectOption('1')
    await this.fillFieldValue(this.elements.postalCode, postalCode.toString());
    await this.fillFieldValue(this.elements.phoneNumber, phoneNumber);
  }

  async assertElements(){
    await expect(this.elements.title).toBeVisible();
    await expect(this.elements.shippingMethods).toBeVisible();
    await expect(this.elements.nextButton).toBeVisible();

  };
}
