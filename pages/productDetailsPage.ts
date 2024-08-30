import { type Locator, type Page, expect } from '@playwright/test';

export class ProductDetailsPage {
    readonly page: Page;
    readonly elements: {
        size: Locator,
        color: Locator,
        addToCard: Locator
        tabReview: Locator;
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            size: page.getByLabel('XS'),
            color: page.getByLabel('Blue'),
            addToCard: page.getByRole('button', { name: 'Add to Cart' }),
            tabReview: page.locator('#tab-label-reviews-title')
        };

    }

};