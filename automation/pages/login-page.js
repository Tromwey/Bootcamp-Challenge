import { Selector, t } from "testcafe"
import { CREDENTIALS, MESSAGE_ERRORS } from "../data/constants"

class LoginPage {
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn').withText('Inicia sesión')
        this.invalidCredentialsMessage = Selector('.error_msg')
    }

    async submitLoginForm(email, password){

        if(email != CREDENTIALS.INVALID_USER.EMPTY){
            await t.typeText(this.emailInput, email)
        }
        
        if(password != CREDENTIALS.INVALID_USER.EMPTY){
            await t.typeText(this.passwordInput, password)
        }

        await t.click(this.loginButton)
    }

    async assertInvalidLogin(messageError){
        switch (messageError) {
            case MESSAGE_ERRORS.INVALID_EMAIL:
                await t.expect(await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.INVALID_EMAIL_EN).exists || 
                               await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.INVALID_EMAIL_ES).exists).ok()
                
                break;

            case MESSAGE_ERRORS.INVALID_PASSWORD:
                await t.expect(await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.INVALID_PASSWORD_EN).exists || 
                               await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.INVALID_PASSWORD_ES).exists).ok()
                break;

            case MESSAGE_ERRORS.INVALID_CREDENTIALS:
                await t.expect(await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.INVALID_CREDENTIALS_EN).exists || 
                               await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.INVALID_CREDENTIALS_ES).exists).ok()
                break;
        
            default:
                break;
        }

    }
}

export default new LoginPage