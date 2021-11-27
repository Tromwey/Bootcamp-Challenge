import loginPage from "../pages/login-page"
import productsPage from "../pages/products-page"
import { CREDENTIALS, URLS } from "../data/constants"
import {STANDARD_USER} from "../data/roles"

fixture ('Login feature test')
    .page `${URLS.BASE_URL}`

test.meta('type','smoke')('As a user, I should be able to log in succesfully by providing valid credentials', async t => {
    await t 
        .typeText(loginPage.usernameInput, CREDENTIALS.STANDARD_USER.USERNAME)
        .typeText(loginPage.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
        .click(loginPage.loginButton)
        .expect(productsPage.productsPageTitle.exists).ok()
})

test('Abstraction example', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(productsPage.productsPageTitle.exists).ok()
})

test('Role example', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(productsPage.productsPageTitle.exists).ok()
})