import { type Locator, type Page, expect } from '@playwright/test';

export class CatalogProductPage {
    readonly page: Page;
    readonly elements: {
        promoBlocksPrincipal: Locator,
        promoBlocksColumnsSecond: Locator,
        promoBlocksColumnsThird: Locator,
        productsGrid: Locator,
        product: Locator
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            promoBlocksPrincipal: page.locator('.blocks-promo'),
            promoBlocksColumnsSecond: page.locator('.block-promo-wrapper.block-promo-2columns'),
            promoBlocksColumnsThird: page.locator('.block-promo-wrapper.block-promo-3columns'),
            productsGrid: page.locator('.products-grid.grid'),
            product: page.getByRole('link', { name: 'Radiant Tee' })
        };

    }

    async assertElements() {
      await expect(this.elements.promoBlocksPrincipal).toBeVisible();
      await expect(this.elements.promoBlocksColumnsSecond).toBeVisible();
      await expect(this.elements.promoBlocksColumnsThird).toBeVisible();
      await expect(this.elements.productsGrid).toBeVisible();
    }
};