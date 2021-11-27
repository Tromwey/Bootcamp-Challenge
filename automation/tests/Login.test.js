import { URLS } from "../data/constants"
import todayPage from "../pages/today-page"
import { STANDARD_USER } from "../data/roles"
import loginPage from "../pages/login-page"

fixture ('Login feature test')
    .page `${URLS.BASE_URL}`

test.meta({ feature: 'login', type: 'smoke'})('As a user, I should be able to log in succesfully by providing valid credentials', async t => {
    await t
        .useRole(STANDARD_USER)
        .expect(todayPage.todayPageTitle.exists).ok()
})

//Validates the multiple messsages for login errors

test.meta({ feature: 'login' })('As a user, I should not be able to log in by not providing an email', async t => {
    loginPage.submitLoginFormEmptyEmail()
    await t.expect(loginPage.invalidEmailMessage.exists).ok()
})

test.meta({ feature: 'login' })('As a user, I should not be able to log in by not providing a password', async t => {
    loginPage.submitLoginFormEmptyPassword()
    await t.expect(loginPage.invalidPasswordMessage.exists).ok()
})

test.meta({ feature: 'login' })('As a user, I should not be able to log in by providing invalid credentials', async t => {
    loginPage.submitLoginFormInvalidCredentials()
    await t.expect(loginPage.invalidCredentialsMessage.exists).ok()
})

//Validates simply the login was not done

test.meta({ feature: 'login' })('As a user, I should not be able to log in by not providing an email', async t => {
    loginPage.submitLoginFormEmptyEmail()
    await t.expect(todayPage.todayPageTitle.exists).notOk()
})

test.meta({ feature: 'login' })('As a user, I should not be able to log in by not providing a password', async t => {
    loginPage.submitLoginFormEmptyPassword()
    await t.expect(todayPage.todayPageTitle.exists).notOk()
})

test.meta({ feature: 'login' })('As a user, I should not be able to log in by providing invalid credentials', async t => {
    loginPage.submitLoginFormInvalidCredentials()
    await t.expect(todayPage.todayPageTitle.exists).notOk()
})



