# Singlish to Sinhala Translator – Playwright Automation

This repository contains Playwright automated tests for validating a Singlish to Sinhala translation web application.
The test suite covers positive functional cases, negative input handling, and UI behavior validation.

---

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)
- Git

Check versions:
node -v
npm -v
git --version

---

## Clone the Repository

Clone this repository to your local machine:
git clone (https://github.com/ThisulaLewhan/playwright-translator)

Navigate into the project directory:
cd playwright-tests

---

## Installation & Setup

Install project dependencies:
npm install

Install Playwright browsers:
npx playwright install

---

## Running the Tests

Run all automated tests:
npx playwright test

Run tests in headed (browser visible) mode:
npx playwright test --headed

Run a specific test file:
npx playwright test singlishTranslator.spec.ts

View the HTML test report after execution:
npx playwright show-report


