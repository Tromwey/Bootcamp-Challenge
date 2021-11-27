import { Selector, t } from "testcafe"

class LoginPage {
    constructor(){
        this.usernameInput = Selector('#user-name')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('#login-button')
    }

    async submitLoginForm(username, password){
        await t 
        .typeText(this.usernameInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }
}

export default new LoginPage