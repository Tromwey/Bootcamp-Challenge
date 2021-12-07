import { Role } from 'testcafe'
import { CREDENTIALS, URLS } from "./constants"
import loginPage from '../pages/login-page'

export const STANDARD_USER = Role(URLS.BASE_URL , async() => {
   await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
}, {preserveUrl:true})
