import { type Locator, type Page } from '@playwright/test';

export class ModalProceedCheckoutPage {
    readonly page: Page;
    readonly elements: {
        buttonProceedCheckout: Locator
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            buttonProceedCheckout: page.getByRole('button', { name: 'Proceed to Checkout' })
        };
    }
}