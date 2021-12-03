# Bootcamp-FrontEnd

##Introduction 

The objetive of this proejct is to apply all the techniques and best practices during the front-end bootcamp session

## Project Structure
```
├─ ...
├─ FrontEnd       # Main project folder
│   ├─ data         # Constants
│   ├─ pages        # Pages objects, Selectors and methods
│   ├─ reports      # Results documentation
│   ├─ tests        # Tests
│   └─ ...
├─ package.json
├─ .env
├─ config files
└─ ...
```
## Pre-requisites
1. Node.js
2. Chrome and Firefox browsers

## Project Setup
1. Clone this repo
2. Go to the repo folder
3. Run the npm install
4. Create a .env file with the following varaibles:
```
EMAIL=your@email.com
PASSWORD=your_password
BASE_URL=website_url/
```
## Dependencies
* testcafe
* testcafe-reporter-html
* dotenv
* eslint
* eslint-plugin-cafe
* newman

## Scripts

* `test-smoke` Runs all the highly important tests
* `test-login` Runs all the tests for the LoginPage fixture
* `test-today` Runs all the tests for the TodayPage fixture
* `test-login-multi` Runs all the tests for the LoginPage fixture in both explorers (Chrome and Firefox)
* `test-reporter` Runs all the implemented tests generating a report
* `eslint` Runs eslint analysis
* `newman` Runs API tests
 
