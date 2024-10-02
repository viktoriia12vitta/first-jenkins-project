
import { test } from '@playwright/test';

test.describe('Test Group1', () => {

   // create beforeEach for tests
   test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/");
   });

   // create afterEach for tests
    test.afterEach(async ({ page }) => { 
      //  await page.waitForTimeout(1000);
   });

    
  test('Getting the title of the page', async ({ page }) => {
    console.log(await page.title()); 
  });

  test('Getting the current URL of the page', async ({ page }) => {
    console.log(page.url());
  });

});