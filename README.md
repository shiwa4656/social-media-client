# Social Media Client

This project is a social media client application with a focus on code quality, testing, and best development practices. The application runs in the **`workflow` branch**, which includes the setup for development tools such as **ESLint**, **Prettier**, **Husky**, **lint-staged**, **Jest**, and **Cypress**.

## Table of Contents

1. [Installation](#installation)
2. [Switching to the Workflow Branch](#switching-to-the-workflow-branch)
3. [Running the Project](#running-the-project)
4. [Testing](#testing)
   - [Unit Tests (Jest)](#unit-tests-jest)
   - [End-to-End Tests (Cypress)](#end-to-end-tests-cypress)
5. [Code Quality and Linting](#code-quality-and-linting)
   - [ESLint](#eslint)
   - [Prettier](#prettier)
   - [Pre-commit Hooks (Husky and lint-staged)](#pre-commit-hooks-husky-and-lint-staged)
6. [Contributing](#contributing)
7. [License](#license)

---

## Installation

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)

### Steps to Install:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shiwa4656/social-media-client.git
   cd social-media-client
npm install
git branch
  master
* workflow
git checkout workflow
npm run build
npm run start
### Testing
##Unit Tests (Jest)
npm run test
## End-to-End Tests (Cypress)
npm run test-e2e

##ESLint
npm run lint

## Prettier
npm run format

### Pre-commit Hooks (Husky and lint-staged)
The project uses Husky and lint-staged to enforce code quality before commits. Prettier and ESLint will automatically run on staged files, and if any issues are found, the commit will be blocked.
