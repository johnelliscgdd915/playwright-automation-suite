// page-objects/HomePage.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the home screen of Scryfall.
 * Encapsulates all element selectors and relevant actions.
 */
export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;

  readonly AdvSearchButton: Locator;
  readonly syntaxButton: Locator;
  readonly allSetsButton: Locator;
  readonly randomButton: Locator;

  readonly footerAdvSearch: Locator;
  readonly footerSyntax: Locator;
  readonly footerAllSets: Locator;
  readonly footerRandom: Locator;

  readonly sAndDBots: Locator;
  readonly FAQs: Locator;
  readonly blog: Locator;
  readonly tagger: Locator;
  readonly mTGWiki: Locator;
  readonly artGame: Locator;

  readonly yourAccount: Locator;
  readonly register: Locator;
  readonly tos: Locator;
  readonly contact: Locator;
  readonly privacy: Locator;

  readonly apiDocumentation: Locator;
  readonly cardObjects: Locator;
  readonly cardImagery: Locator;
  readonly bulkData: Locator;
  readonly apiChangeLog: Locator;

  readonly donate: Locator;
  readonly patreon: Locator;
  readonly bluesky: Locator;
  readonly github: Locator;

  readonly sevenUpCollage: Locator[];

  /**
   * Initializes locators for homepage elements.
   * @param page - Playwright page instance
   */
  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input');

    this.AdvSearchButton = page.locator('p.homepage-links > a', { hasText: 'Advanced Search' });
    this.syntaxButton = page.locator('p.homepage-links > a', { hasText: 'Syntax Guide' });
    this.allSetsButton = page.locator('p.homepage-links > a', { hasText: 'All Sets' });
    this.randomButton = page.locator('p.homepage-links > a', { hasText: 'Random Card' });

    this.footerAdvSearch = page.locator('#footer').getByRole('link', { name: 'Advanced Search' });
    this.footerSyntax = page.locator('#footer').getByRole('link', { name: 'Syntax Guide' });
    this.footerAllSets = page.locator('#footer').getByRole('link', { name: 'All Sets' });
    this.footerRandom = page.locator('#footer').getByRole('link', { name: 'Random Card' });

    this.sAndDBots = page.locator('#footer').getByRole('link', { name: 'Slack & Discord Bots' });
    this.FAQs = page.locator('#footer').getByRole('link', { name: 'Site FAQs & Help' });
    this.blog = page.locator('#footer').getByRole('link', { name: 'Scryfall Blog' });
    this.tagger = page.locator('#footer').getByRole('link', { name: 'Scryfall Tagger' });
    this.mTGWiki = page.locator('#footer').getByRole('link', { name: 'MTG Wiki' });
    this.artGame = page.locator('#footer').getByRole('link', { name: 'Art Game' });

    this.yourAccount = page.locator('#footer').getByRole('link', { name: 'Your Account' });
    this.register = page.locator('#footer').getByRole('link', { name: 'Register' });
    this.tos = page.locator('#footer').getByRole('link', { name: 'Terms of Service' });
    this.contact = page.locator('#footer').getByRole('link', { name: 'Contact Us' });
    this.privacy = page.locator('#footer').getByRole('link', { name: 'Privacy & Security' });

    this.apiDocumentation = page.locator('#footer').getByRole('link', { name: 'API Documentation' });
    this.cardObjects = page.locator('#footer').getByRole('link', { name: 'Card Objects' });
    this.cardImagery = page.locator('#footer').getByRole('link', { name: 'Card Imagery' });
    this.bulkData = page.locator('#footer').getByRole('link', { name: 'Bulk Data' });
    this.apiChangeLog = page.locator('#footer').getByRole('link', { name: 'API Changelog' });

    this.donate = page.locator('#footer').getByRole('link', { name: 'Donate to Scryfall' });
    this.patreon = page.locator('#footer').getByRole('link', { name: 'Patreon' });
    this.bluesky = page.locator('#footer').getByRole('link', { name: 'Bluesky' });
    this.github = page.locator('#footer').getByRole('link', { name: 'GitHub' });

    this.sevenUpCollage = new Array();
    for(let i = 0; i < 6; i++){
      this.sevenUpCollage.push(page.locator('div').nth(5).locator('a > img').nth(i));
    }
  }

  /**
   * Navigates to the homepage.
   */
  async goto(): Promise<void> {
    await this.page.goto('https://scryfall.com/');
  }

  /**
   * Inputs text into search bar then executes search.
   */
  async search(searchText: string): Promise<void> {
    await this.searchInput.fill(searchText);
    await this.page.keyboard.press('Enter');
  }
}