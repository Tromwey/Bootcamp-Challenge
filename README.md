# Bootcamp-FrontEnd

##Introduction 

The objetive of this proejct is to apply all the techniques and best practices during the front-end bootcamp session

## Project Structure
```
├─ ...
├─ .github\workflows	# Github actions
├─ API         			# API test automation main folder
├─ FrontEnd         	# FrontEnd test automation main folder
│   ├─ data         	# Constants
│   ├─ pages        	# Pages objects, Selectors and methods
│   ├─ reports      	# Results documentation
│   ├─ tests        	# Tests
│   └─ ...
├─ .env
├─ package-lock.json
├─ package.json
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
4. Create a .env file with the following variables:
```
EMAIL=your@email.com
PASSWORD=your_password
BASE_URL=login_url/
```
5. Edit the Todoist API_environment.json file adding your Todoist Token:
```
"values": [
	{
		"key": "API_TOKEN",
		"value": "tokenValue",
		"enabled": true
	}
],
```

## Dependencies
* testcafe
* testcafe-reporter-html
* testcafe-reporter-allure
* dotenv
* eslint
* eslint-plugin-cafe
* newman

## Scripts

* `test-smoke` Runs all the highly important tests
* `test-login` Runs all the tests for the Login fixture
* `test-task` Runs all the tests for the Task fixture
* `test-project` Runs all the tests for the Project fixture
* `test-login-multi` Runs all the tests for the LoginPage fixture in both explorers (Chrome and Firefox)
* `test-reporter` Runs all the implemented tests generating a report
* `eslint` Runs eslint analysis
* `newman` Runs API tests
* `test-headless` Runs all the tests in headless mode, used on Jenkins
* `test-smoke-headless` Runs all the highly importart tests in headless mode, used on Jenkins
* `allure-report` Generates and open the Allure report

 
