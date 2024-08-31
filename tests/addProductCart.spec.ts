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

  test("Cenário 3: Adicionar Produto Carrinho", async () => {
    await homePage.elements.menuItem.women.click();

    await catalogProductPage.assertElements();

    await catalogProductPage.elements.product.first().click();
    await productDetailsPage.elements.size.click();
    await productDetailsPage.elements.color.click();
    await productDetailsPage.elements.addToCard.click();

    await expect(homePage.elements.cart).toBeVisible;
  });

  test("Cenário 6: Adicionar Produto Aleatorio ao Carrinho", async () => {
    await homePage.elements.menuItem.men.click();

    await catalogProductPage.assertElements();

    const productsGrid = await catalogProductPage.elements.productsGrid;
    const productsCount = await productsGrid.count();
    const randomProductIndex = Math.floor(Math.random() * productsCount);
    const product = productsGrid.nth(randomProductIndex);

    await product.click();

    if (await productDetailsPage.elements.sizeGrid.isVisible()) {
      const listSize = await productDetailsPage.elements.sizeGrid;
      const itemsSize = listSize.locator(".//div[role='option']");
      const itemSizeCount = await itemsSize.count();
      const randomIndex = Math.floor(Math.random() * itemSizeCount);
      const randomSize = itemsSize.nth(randomIndex);
  
      await randomSize.click(); 
    };

    if (await productDetailsPage.elements.sizeGrid.isVisible()) {
      const listColor = await productDetailsPage.elements.sizeGrid;
      const itemsColor = listColor.locator("div[role='option']");
      const itemColorCount = await itemsColor.count();
      const randomIndex = Math.floor(Math.random() * itemColorCount);
      const randomColor = itemsColor.nth(randomIndex);

      await randomColor.click(); 
    };

    await productDetailsPage.elements.addToCard.click();

    await expect(homePage.elements.cart).toBeVisible;
  });
});
