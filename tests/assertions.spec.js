import { test, expect } from '@playwright/test';

test.describe("Learn assertions", () => {
    test('Verify web page behavior @smoke', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')

        //1. to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/')
    //    await page.pause()

        //2. To have a title
        await expect(page).toHaveTitle('The Internet')
      //  await page.pause()


    })

    test('Continue assertion @regression', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')
       // await page.pause()

        //3. Assert Visibility
        await expect(page.locator('h1')).toBeVisible();

        //4. To have text
        await expect(page.locator('h2')).toHaveText('Available Examples');

     //  await page.pause()


        


    })


})