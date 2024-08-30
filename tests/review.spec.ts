import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CatalogProductPage } from "../pages/catalogProductPage";
import { ProductDetailsPage } from "../pages/productDetailsPage";
import { ReviewProductPage } from "../pages/reviewProductPage";


test.describe("Suite Test Review Produto", async () => {
  let homePage: HomePage;
  let catalogProductPage: CatalogProductPage;
  let productDetailsPage: ProductDetailsPage;
  let reviewProductPage: ReviewProductPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    catalogProductPage = new CatalogProductPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    reviewProductPage = new ReviewProductPage(page);
    homePage.goTo();
  });

  test("Cenário 5: Review Produto", async () => {
    await homePage.elements.menuItem.women.click();

    await catalogProductPage.assertElements();

    await catalogProductPage.elements.product.first().click();
    
    await productDetailsPage.elements.tabReview.click();

    await reviewProductPage.choose2Stars();
    await reviewProductPage.registerReview('James', 'Product', 'Not so good product')

    await reviewProductPage.elements.submitReview.click();

    await reviewProductPage.assertElements();
  });
});
