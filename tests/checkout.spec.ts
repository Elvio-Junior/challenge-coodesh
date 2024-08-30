import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CatalogProductPage } from "../pages/catalogProductPage";
import { ProductDetailsPage } from "../pages/productDetailsPage";
import { getPersonData } from "../helpers/getPersonData";
import { Person } from "../helpers/person";
import { CreateAccountPage } from "../pages/createAccountPage";
import { ModalProceedCheckoutPage } from "../pages/modalProceedCheckout";
import { ShippingPage } from "../pages/shippingPage";
import { ReviewPaymentPage } from "../pages/reviewPaymentPage";
import { CheckoutPage } from "../pages/checkoutPage";

test.describe("Suite Test Checkout", async () => {
  let homePage: HomePage;
  let catalogProductPage: CatalogProductPage;
  let productDetailsPage: ProductDetailsPage;
  let person: Person;
  let createAccountPage: CreateAccountPage;
  let modalProceedCheckoutPage: ModalProceedCheckoutPage;
  let shippingPage: ShippingPage;
  let reviewPaymentPage: ReviewPaymentPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    catalogProductPage = new CatalogProductPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    createAccountPage = new CreateAccountPage(page);
    modalProceedCheckoutPage = new ModalProceedCheckoutPage(page)
    shippingPage = new ShippingPage(page);
    reviewPaymentPage = new ReviewPaymentPage(page);
    checkoutPage = new CheckoutPage(page);
    homePage.goTo();
  });

  test("Cenário 5: Realizar checkout", async () => {
    const personData = await getPersonData();
    
    person = Person.create(personData.name.first, personData.name.last, personData.email, personData.login.password, personData.login.password);

    homePage.elements.topMenu.createAccountLink.click();
    await createAccountPage.registerUser(person);

    homePage.elements.logo.click();

    await homePage.elements.menuItem.women.click();

    await catalogProductPage.assertElements();

    await catalogProductPage.elements.product.first().click();
    await productDetailsPage.elements.size.click();
    await productDetailsPage.elements.color.click();
    await productDetailsPage.elements.addToCard.click();

    await expect(homePage.elements.cart).toBeVisible;

    await homePage.elements.cart.waitFor({ state: 'visible', timeout: 60000 });
    await homePage.elements.cart.click();
    await modalProceedCheckoutPage.elements.buttonProceedCheckout.click();

    //await shippingPage.elements.title.waitFor({ state: 'visible', timeout: 60000 });
    await shippingPage.assertElements();

    if (await shippingPage.elements.streetAddress.isVisible()) {
      await shippingPage.registerShipping(personData.location.street.name, personData.location.city, personData.location.postcode, personData.phone)
    }
    await shippingPage.elements.shippingMethods.click();
    await shippingPage.elements.nextButton.click();

    //await reviewPaymentPage.elements.placeOrder.waitFor({ state: 'visible', timeout: 60000 });
    await reviewPaymentPage.assertElements();

    await reviewPaymentPage.elements.placeOrder.click();

    await checkoutPage.elements.messagePurchase.waitFor({ state: 'visible', timeout: 60000 });

    await checkoutPage.assertElements();

  });
}); 