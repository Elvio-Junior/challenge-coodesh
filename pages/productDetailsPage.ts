import { type Locator, type Page, expect } from '@playwright/test';

export class ProductDetailsPage {
    readonly page: Page;
    readonly elements: {
        size: Locator,
        sizeGrid: Locator;
        color: Locator,
        colorGrid: Locator;
        addToCard: Locator
        tabReview: Locator;
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            size: page.getByLabel('XS'),
            sizeGrid: page.locator("//div[@class='swatch-attribute size']//div[@role='listbox']"),
            color: page.getByLabel('Blue'),
            colorGrid: page.locator("div.swatch-attribute color div[role='listbox']"),
            addToCard: page.getByRole('button', { name: 'Add to Cart' }),
            tabReview: page.locator('#tab-label-reviews-title')
        };

    }

};
