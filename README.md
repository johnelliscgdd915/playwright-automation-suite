# Playwright Automation Suite

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Status: Portfolio](https://img.shields.io/badge/status-portfolio-blue)
![Last Update](https://img.shields.io/badge/last%20update-March%202026-brightgreen)

> ⚠️ This project is part of a personal portfolio and is not open to external contributions (pull requests or issues) at this time.

An end-to-end test automation suite for the [Scryfall Site](https://scryfall.com/) using Playwright and TypeScript.  
It demonstrates modern QA practices like Page Object Model, custom fixtures, reusable test flows, and future-proof structure.

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/playwright-automation-suite

# Install dependencies
npm install

# Run all tests
npx playwright test

# Run a specific test
npx playwright test tests/home.spec.ts

# Run in headed mode
npx playwright test --headed

# Launch test runner UI
npx playwright test --ui
```
---

## Repository Structure

```
├── page-objects/        # Page Object Model definitions
├── fixtures/            # Custom test fixtures (auth, data, setup)
├── tests/               # Individual test files
├── playwright.config.ts # Playwright configuration
├── README.md            # Project documentation
```

---

## ✅ Covered Test Scenarios

- **Home Search:** Searching for specific and sets of cards by name, set, and rules/text criteria  
- **Navigation:** Confirm functionality and destination of all site navigation links and buttons across all three main function pages
- **Advanced Search:** Successful option selection flow and validation of input fields  

---

## 🧪 Fixtures, Page Object Models, & Reusability

This project uses Playwright’s custom fixtures and a Page Object Model architecture to:

- Fully capture all UI items for readability, test flow, and future expansion
- Centralize test data (`searchData` fixture with search inputs of varying complexity)
- Overload common page functions, such as goto()

➡️ This drastically reduces boilerplate and improves test readability.

---

## 🧠 Project Highlights

- Page Object Model for clean test logic and maintenance  
- Custom fixtures to handle foundational data and user flows
- English comments and clear test scenarios  
- Modular and scalable structure
- Tailored for QA portfolios and real-world team practices  

---

## 📌 Roadmap & Status

- ✅ Page Object Model applied to all test suites
- ✅ Centralized and reusable fixtures implemented
- ✅ Test comments standardized in English
- ✅ Project structure cleaned and documented

### 🔄 Suggested Future Improvements

- 🔧 Add CI pipeline with GitHub Actions to allow for automated test runs  
- 📊 Generate and track test coverage reports
- 🌀 Implement automatic retry for flaky tests
- 🧾 Standardize file and method naming conventions  
- 🔍 Implement additional functions and data structures for fuller End-to-End test suite
    IE: confirm footer links for every page, expand passed equivalence test to cover total option permutations for Advanced Search, implement EasySwap system for site updates such as new sets, Secret Lairs, etc.

---

## 🎯 About

This project was created as part of a portfolio to demonstrate mastery of QA automation with Playwright and Type/JavaScript.  
It simulates a real QA engineer workflow in a production team, with emphasis on code readability, maintainability, and CI readiness.

All scenarios are built, in a read only capacity of publicly available HTML, on top of the **Scryfall Application**. Scryfall is a powerful search tool for all cards printed in the history of the Trading Card Game, Magic: The Gathering.

---

## 📝 License

MIT — feel free to read and learn, but external PRs are currently not accepted.

---