Social Media Client
This project is a social media client application with a focus on code quality, testing, and best development practices. The application runs in the workflow branch, which includes the setup for development tools such as ESLint, Prettier, Husky, lint-staged, Jest, and Cypress.

Table of Contents
Installation
Switching to the Workflow Branch
Running the Project
Testing
Unit Tests (Jest)
End-to-End Tests (Cypress)
Code Quality and Linting
ESLint
Prettier
Pre-commit Hooks (Husky and lint-staged)
Contributing
License
Installation
Before you begin, make sure you have the following installed:

Node.js (version 16 or later)
npm (comes bundled with Node.js)
Steps to Install:
Clone the repository:

bash
Copy code
git clone https://github.com/shiwa4656/social-media-client.git
cd social-media-client
Install project dependencies:

bash
Copy code
npm install
Switching to the Workflow Branch
This project requires you to be in the workflow branch, where the development setup (ESLint, Prettier, Husky, etc.) is configured.

Check which branch you're on: Run the following command to see your current branch:

bash
Copy code
git branch
You should see an asterisk (*) next to the workflow branch:

bash
Copy code
  master
* workflow
If you're not in the workflow branch, switch to it by running:

bash
Copy code
git checkout workflow
Running the Project
Once you're in the workflow branch, you can start the development server and build the necessary assets:

Build the SCSS files:

bash
Copy code
npm run build
This command compiles SCSS files from the src/scss folder to the dist/css folder.

Start the live development server:

bash
Copy code
npm run start
This will run a live development server using live-server and automatically watch for changes to SCSS files, recompiling them as needed.

Testing
The project is set up with both Jest for unit tests and Cypress for end-to-end tests.

Unit Tests (Jest)
To run the unit tests (configured using Jest):

bash
Copy code
npm run test
This will run all tests in files ending with .test.js and .test.mjs.

End-to-End Tests (Cypress)
To run end-to-end tests (configured using Cypress):

bash
Copy code
npm run test-e2e
You can also open the interactive Cypress test runner with:

bash
Copy code
npm run test-e2e
Code Quality and Linting
The project is configured with ESLint and Prettier to ensure code quality and consistent formatting.

ESLint
ESLint is set up to lint both JavaScript (.js) and ES modules (.mjs) files. It also includes plugins for Prettier, Cypress, and Jest to ensure code quality across different contexts (general code, tests, etc.).

To run ESLint manually:

bash
Copy code
npm run lint
Prettier
Prettier is configured to automatically format .js, .mjs, .html, and .scss files.

To run Prettier manually on all files:

bash
Copy code
npm run format
Pre-commit Hooks (Husky and lint-staged)
The project uses Husky and lint-staged to enforce code quality before commits. Prettier and ESLint will automatically run on staged files, and if any issues are found, the commit will be blocked.

