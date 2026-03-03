import { test, expect } from '../fixtures/fixtures';
import { AdvancedSearchPage } from '../page-objects/AdvancedSearchPage';

/**
 * Test: Succesfully open the Advanced Search page of Scryfall.
 */
test('Open Advanced Search Page', async ({ page }) => {
  const advSearchPage = new AdvancedSearchPage(page);
  await advSearchPage.goto();
  await expect(page).toHaveURL(/advanced/);
});

/**
 * Test: Searching for all cards with specific text and color options yields expected results.
 */
test('Search for all cards by function text and color selection', async ({ page, searchData}) => {
  const advSearchPage = new AdvancedSearchPage(page);
  await advSearchPage.goto();
  await advSearchPage.fillTextField(searchData.functionalSearch);
  await advSearchPage.colorSelector('UR');
  await page.getByLabel('Color Comparison').selectOption('<=');
  await advSearchPage.search();
  await expect(page.locator('#main')).toContainText('where the text includes “draw x cards” and the colors ≤ RU and (the card is available on Paper)');
});

/**
 * Test: Searching for all cards with specific text and commander color options yields expected results.
 */
test('Search for all cards by type text and commander identity selection', async ({ page}) => {
  const advSearchPage = new AdvancedSearchPage(page);
  await advSearchPage.goto();
  await advSearchPage.fillTypeLine('Bird');
  await advSearchPage.cmdrCISelector('WUG');
  await advSearchPage.search();
  await expect(page.locator('#main')).toContainText('where the card types include “bird” and the color identity ≤ GUW and (the card is available on Paper)');
});