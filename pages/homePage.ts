import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly elements: {
        logo: Locator,
        topMenu: {
            supportProjectLink: Locator,
            sigInLink: Locator,
            createAccountLink: Locator    
        },
        menuItem: {
            whatsNew: Locator,
            women: Locator,
            men: Locator,
            gear: Locator,
            trainning: Locator,
            sale: Locator
        },
        promoBlocks: Locator,
        hotSellers: Locator,
        promoProducts: Locator,
        footer: {
            notes: Locator,
            pratice: Locator,
            writeUs: Locator,
            subscribe: Locator,
            searchTerms: Locator,
            privacyCookiePolicy: Locator,
            advancedSearch: Locator,
            ordersAndReturns: Locator
        }
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            logo: page.getByLabel('store logo'),
            topMenu: {
                supportProjectLink: page.getByRole('link', { name: 'Support This Project' }),
                sigInLink: page.getByRole('link', { name: 'Sign In' }),
                createAccountLink: page.getByRole('link', { name: 'Create an Account' })
            },
            menuItem: {
                whatsNew: page.getByRole('menuitem', { name: 'What\'s New' }),
                women: page.getByRole('menuitem', { name: ' Women' }),
                men: page.getByRole('menuitem', { name: ' Men' }),
                gear: page.getByRole('menuitem', { name: ' Gear' }),
                trainning: page.getByRole('menuitem', { name: ' Training' }),
                sale: page.getByRole('menuitem', { name: 'Sale' })
            },
            promoBlocks: page.locator('.blocks-promo'),
            hotSellers: page.getByRole('heading', { name: 'Hot Sellers' }),
            promoProducts: page.locator('.block.widget.block-products-list.grid'),
            footer: {
                notes: page.getByRole('link', { name: 'Notes' }),
                pratice: page.getByRole('link', { name: 'Practice API Testing using Magento' }),
                writeUs: page.getByRole('link', { name: 'Write for us' }),
                subscribe: page.getByRole('link', { name: 'Subscribe' }),
                searchTerms: page.getByRole('link', { name: 'Search Terms' }),
                privacyCookiePolicy: page.getByRole('link', { name: 'Privacy and Cookie Policy' }),
                advancedSearch: page.getByRole('link', { name: 'Advanced Search' }),
                ordersAndReturns: page.getByRole('link', { name: 'Orders and Returns' })
            }
        };
    }

    async goTo() {
        await this.page.goto('./', { waitUntil: "domcontentloaded", timeout: 60000 });
    };

    async assertElements(){
        await expect(this.elements.logo).toBeVisible();
        await expect(this.elements.topMenu.createAccountLink).toBeVisible();
        await expect(this.elements.topMenu.sigInLink).toBeVisible();
        await expect(this.elements.topMenu.supportProjectLink).toBeVisible();
        await expect(this.elements.menuItem.whatsNew).toBeVisible();
        await expect(this.elements.menuItem.women).toBeVisible();
        await expect(this.elements.menuItem.men).toBeVisible();
        await expect(this.elements.menuItem.gear).toBeVisible();
        await expect(this.elements.menuItem.trainning).toBeVisible();
        await expect(this.elements.menuItem.sale).toBeVisible();
        await expect(this.elements.promoBlocks).toBeVisible();
        await expect(this.elements.hotSellers).toBeVisible();
        await expect(this.elements.promoProducts).toBeVisible();
        await expect(this.elements.footer.notes).toBeVisible();
        await expect(this.elements.footer.pratice).toBeVisible();
        await expect(this.elements.footer.subscribe).toBeVisible();
        await expect(this.elements.footer.searchTerms).toBeVisible();
        await expect(this.elements.footer.privacyCookiePolicy).toBeVisible();
        await expect(this.elements.footer.advancedSearch).toBeVisible();
        await expect(this.elements.footer.ordersAndReturns).toBeVisible();
    };
};