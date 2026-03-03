import { test as base, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

type SearchData = { 
  cardName: string;  
  setCode: string; 
  complexSearch: string;
  functionalSearch: string;
};

/**
 * Custom test setup with fixtures for this project.
 * Provides reusable authentication flows, navigation, and test data.
 */
export const test = base.extend<{
  /**
   * Centralized reusable test data (users, products).
   */
  searchData: SearchData;


}>({
  searchData: async ({}, use) => {
    await use({
      cardName: 'Counterspell', 
      setCode: 'set:STA', 
      complexSearch: 't:creature (c=u or c=r or c=ur) m>5',
      functionalSearch: '"draw X cards"'
    });
  }
});

// Re-export expect to be used in all tests
export { expect };