import { test, expect } from "@playwright/test";
import PomManager from "../PomManager/pomManager.js";

let pm;

//declaring 1st group of test with 'test.describe'
test.describe('Login Tests', () => {
    test.beforeEach(async ({page})  => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page})  => {
        await page.close()
    })


    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!')
        await pm.securePage.assertLoggedInMessage('You logged into a secure area!')

        //Assert value directly in test
        const message = await pm.securePage.getMessage()
        expect(message).toContain('You logged into a secure area!')
    })


    test('Login with invalid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('invalidUser', 'SuperSecretPassword!')
        await pm.securePage.assertLoggedInMessage('Your username is invalid!')
    })



})


//2nd set of group test
test.describe('Checkbox verification', () => {
    test.beforeEach(async ({page})  => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page})  => {
        await page.close()
    })


    test('Check and uncheck checkboxes', async () => {
        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkboxesPage(1)
        await pm.checkboxesPage.assertCheckbox(1, true)


        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkboxesPage(2)
        await pm.checkboxesPage.assertCheckbox(2, false)
    })


})