import { test, expect } from '../fixtures/fixtures';
import { SyntaxPage } from '../page-objects/SyntaxPage';

/**
 * Test: Succesfully open the Syntax Reference page of Scryfall.
 */
test('Open Syntax Guide Page', async ({ page }) => {
  const syntaxPage = new SyntaxPage(page);
  await syntaxPage.goto();
  await expect(page).toHaveURL(/docs\/syntax/);
});

/**
 * Test: Validate functionality of all syntax reference links.
 */
test('Validate Reference Links', async ({ page }) => {
  const syntaxPage = new SyntaxPage(page);
  await syntaxPage.goto();
  await syntaxPage.verifyRefLinks();
});

/**
 * Test: Validate functionality of a single example search link.
 */
test('Validate Example Search Link', async ({ page }) => {
  const syntaxPage = new SyntaxPage(page);
  await syntaxPage.goto();
  await syntaxPage.exSearch.click();
  await expect(page.getByRole('textbox', { name: 'Search for Magic cards' })).toHaveValue(syntaxPage.exName);
});