import { Selector, t } from "testcafe"
import { CREDENTIALS } from "../data/constants"

class LoginPage {
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn').withText('Inicia sesión')

        this.invalidEmailMessage = Selector('.error_msg').withText('Dirección de email no válida.')
        this.invalidPasswordMessage = Selector('.error_msg').withText('Contraseña en blanco.')
        this.invalidCredentialsMessage = Selector('.error_msg').withText('Email o contraseña incorrectos')
    }

    async submitLoginForm(email, password){
        await t 
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }

    async submitLoginFormEmptyEmail(){
        await t 
            .typeText(this.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
            .click(this.loginButton)
    }

    async submitLoginFormEmptyPassword(){
        await t 
            .typeText(this.emailInput, CREDENTIALS.STANDARD_USER.EMAIL)
            .click(this.loginButton)
    }

    async submitLoginFormInvalidCredentials(){
        await t 
            .typeText(this.emailInput, CREDENTIALS.INVALID_USER.EMAIL)
            .typeText(this.passwordInput, CREDENTIALS.INVALID_USER.PASSWORD)
            .click(this.loginButton)
    }
}

export default new LoginPage