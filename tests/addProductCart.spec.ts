import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CatalogProductPage } from "../pages/catalogProductPage";
import { ProductDetailPage } from "../pages/productDetails";

test.describe("Suite Test Adicionar Produto Carrinho", async () => {
  let homePage: HomePage;
  let catalogProductPage: CatalogProductPage;
  let productDetailPage: ProductDetailPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    catalogProductPage = new CatalogProductPage(page);
    productDetailPage = new ProductDetailPage(page);
    homePage.goTo();
  });

  test("Cenário 4: Adicionar Produto Carrinho", async ({ page }) => {
    await homePage.elements.menuItem.women.click();

    await catalogProductPage.assertElements();

    await catalogProductPage.elements.product.first().click();
    await productDetailPage.elements.size.click();
    await productDetailPage.elements.color.click();
    await productDetailPage.elements.addToCard.click();

    await expect(homePage.elements.cart).toBeVisible;
  });
});
