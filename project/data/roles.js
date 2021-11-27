import { Role } from 'testcafe'
import { CREDENTIALS, URLS } from "../data/constants"
import loginPage from '../pages/login-page'

export const STANDARD_USER = Role(URLS.BASE_URL , async() => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD)
}, {preserveUrl:true})
