import { type Locator, type Page, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly elements: {
        messagePurchase: Locator,
        buttonContinue: Locator
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            messagePurchase: page.getByText('Thank you for your purchase!'),
            buttonContinue: page.getByRole('link', { name: 'Continue Shopping' })
        };
    }

    async assertElements(){
        await expect(this.elements.buttonContinue).toBeVisible();
    }
}