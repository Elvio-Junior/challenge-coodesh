import { type Locator, type Page, expect } from "@playwright/test";

export class CatalogSearchPage {
  readonly page: Page;
  readonly elements: {
    searchResult: Locator;
    productList: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.elements = {
      searchResult: page.locator(".page-title"),
      productList: page.locator(".products.list.items.product-items"),
    };
  }

  async assertElements() {
    await expect(this.elements.searchResult).toBeVisible();
    await expect(this.elements.productList).toBeVisible();
  }
}
