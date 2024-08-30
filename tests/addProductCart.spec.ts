import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CatalogProductPage } from "../pages/catalogProductPage";
import { ProductDetailsPage } from "../pages/productDetailsPage";

test.describe("Suite Test Adicionar Produto Carrinho", async () => {
  let homePage: HomePage;
  let catalogProductPage: CatalogProductPage;
  let productDetailsPage: ProductDetailsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    catalogProductPage = new CatalogProductPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    homePage.goTo();
  });

  test("Cenário 4: Adicionar Produto Carrinho", async ({ page }) => {
    await homePage.elements.menuItem.women.click();

    await catalogProductPage.assertElements();

    await catalogProductPage.elements.product.first().click();
    await productDetailsPage.elements.size.click();
    await productDetailsPage.elements.color.click();
    await productDetailsPage.elements.addToCard.click();

    await expect(homePage.elements.cart).toBeVisible;
  });
});
