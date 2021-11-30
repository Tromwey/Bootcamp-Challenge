import { CREDENTIALS, MESSAGE_ERRORS, URLS } from "../data/constants"
import { STANDARD_USER } from "../data/roles"
import loginPage from "../pages/login-page"
import basePage from "../pages/base-page"

fixture ('Login feature test')
    .page `${URLS.BASE_URL}`

test.meta({ feature: 'login', type: 'smoke'})('As a user, I should be able to log in succesfully by providing valid credentials', async t => {
    await t
        .useRole(STANDARD_USER)
        .expect(basePage.barButton.exists).ok()
})

//Validates the multiple messsages for login errors

test.meta({ feature: 'login' })('As a user, I should not be able to log in by not providing an email', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.EMPTY, CREDENTIALS.INVALID_USER.PASSWORD)
    await loginPage.assertInvalidLogin(MESSAGE_ERRORS.INVALID_EMAIL)
})

test.meta({ feature: 'login' })('As a user, I should not be able to log in by not providing a password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.INVALID_USER.EMPTY)
    await loginPage.assertInvalidLogin(MESSAGE_ERRORS.INVALID_PASSWORD)
})

test.meta({ feature: 'login' })('As a user, I should not be able to log in by providing invalid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.INVALID_USER.PASSWORD)
    await loginPage.assertInvalidLogin(MESSAGE_ERRORS.INVALID_CREDENTIALS)
})
