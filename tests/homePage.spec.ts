import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CatalogSearchPage } from '../pages/catalogSearchPage';

test.describe('Suite Test Home Page', async () => {

    let homePage: HomePage;
    let catalogSearchPage: CatalogSearchPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        catalogSearchPage = new CatalogSearchPage(page);
        homePage.goTo();
    });

    test('Cenário 1: Acessar a Home do Site', async () => {
        await homePage.assertElements();
    });

    test('Cenário 2: Busca na Home do Site', async ({ page }) => {
        await homePage.elements.search.fill('shirt');
        await homePage.elements.searchButton.click();
        await page.waitForRequest(request => 
            request.url().includes('/catalogsearch/searchTermsLog/save/')
        );     
        
        await catalogSearchPage.assertElements();

    });
})  