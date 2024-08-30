
import { type Locator, type Page } from '@playwright/test';
import { Person } from '../helpers/person';

export class CreateAccountPage {
    readonly page: Page;
    readonly elements: {
        firstName: Locator,
        lastName: Locator,
        email: Locator,
        password: Locator,
        confirmPassword: Locator
        createAccountButton: Locator
    };

    constructor(page: Page) {
        this.page = page;
        this.elements = {
            firstName: page.getByLabel('First Name'),
            lastName: page.getByLabel('Last Name'),
            email: page.getByLabel('Email', { exact: true }),
            password: page.getByRole('textbox', { name: 'Password*', exact: true }),
            confirmPassword: page.getByLabel('Confirm Password'),
            createAccountButton: page.getByRole('button', { name: 'Create an Account' })
        };
    }

    async fillFieldValue(registerLocator: Locator, value: string) {
        await registerLocator.clear();
        await registerLocator.fill(value);
    };

    async registerUser(person: Person) {
        await this.fillFieldValue(this.elements.firstName, person.firstName);
        await this.fillFieldValue(this.elements.lastName, person.lastName);
        await this.fillFieldValue(this.elements.email, person.email);
        await this.fillFieldValue(this.elements.password, person.password);
        await this.fillFieldValue(this.elements.confirmPassword, person.confirmPassword);
        
        await this.elements.createAccountButton.click();
    };
}
