import {test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

let browser;
let context;
let page;

test.beforeAll(async () => {
// launch chrome browser before all tests
browser = await chromium.launch()
console.log("BEFORE ALL HOOK LAUNCHED CHROMIUM BROWSER")
})

test.beforeEach(async () => {
    // create context for a browser
    context = await browser.newContext()
    // create new page
    page = await context.newPage()
    // navigate to test URL
    await page.goto('https://the-internet.herokuapp.com/');
    // pause execution
    console.log("BEFORE EACH HOOK LAUNCHED NEW PAGE")
    await page.pause()
    })

    test.afterEach( async () => {
        // close page and context
        await page.close()
        await context.close()
        console.log("AFTER ALL HOOK CLOSED BROWSER")
    })


    test.afterAll( async () => {
        // close browser
        await browser.close()
        console.log("AFTER EACH HOOK CLOSED PAGE")
    })



    test('A/B Test', async () => {
        await page.click('text="A/B Testing"')
        const header = await page.textContent("h3")
        expect(header).toBe('A/B Test Control')
    })


    test('Checkbox Verification', async () => {
        await page.click("[href='\/checkboxes']")
        const checkboxes = await page.isChecked('input[type="checkbox"]:first-child')
        expect(checkbox).toBe(false)
    })