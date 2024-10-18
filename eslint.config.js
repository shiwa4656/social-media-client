// eslint.config.js

import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import cypress from 'eslint-plugin-cypress';
import jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules'],
    plugins: {
      prettier,
      cypress,
      jest,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      sourceType: 'module', // Specify the source type, 'module' for ES modules
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        alert: 'readonly',
        localStorage: 'readonly',
        Image: 'readonly',
        // Add Cypress globals
        cy: 'readonly',
        Cypress: 'readonly',
        // Add Jest globals
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
        global: 'readonly', // Needed for Jest-related globals
      },
    },
  },
  // Cypress-specific overrides
  {
    files: ['**/*.cy.js'],
    plugins: {
      cypress,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
    },
    languageOptions: {
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
  },
  // Jest-specific overrides
  {
    files: ['**/*.test.js'],
    plugins: {
      jest,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        global: 'readonly',
      },
    },
  },
  // Node.js specific files (for config files like jest.config.js, babel.config.js, etc.)
  {
    files: ['jest.config.js', 'babel.config.js', 'cypress.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
  },
];
