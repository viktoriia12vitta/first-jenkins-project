import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
   await page.goto("https://www.youtube.com/");

//   await page.waitForTimeout(3000);

   let searchBox = page.locator("//input[@id='search']");
   // we also can use .locator(): "//input[@name='search_query']" or "//input[@name='search' and @id='search']"   await searchBox.click();

   await searchBox.fill('Cydeo');

//   await page.waitForTimeout(3000);

   await searchBox.press("Enter");

//   await page.waitForTimeout(3000);

  /* let firstResult = page.locator("(//a[@id='video-title'])[1]");

   await firstResult.click();

    await page.waitForTimeout(10000);
*/
});