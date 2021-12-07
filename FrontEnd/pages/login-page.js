import { Selector, t } from "testcafe"
import { MESSAGE_ERRORS } from "../data/constants"

class LoginPage {
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn').withText('Inicia sesión')//remove inicia sesion
        this.invalidCredentialsMessage = Selector('.error_msg')
    }

    async submitLoginForm(email, password){

        if(email){
            await t.typeText(this.emailInput, email)
        }
        
        if(password){
            await t.typeText(this.passwordInput, password)
        }

        await t.click(this.loginButton)
    }

    //Assertiones were requested to be done on tests, not on methods calls.

    async assertInvalidLogin(messageError){ 
        switch (messageError) {
            case MESSAGE_ERRORS.TYPE.INVALID_EMAIL:
                await t.expect(await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.EN.INVALID_EMAIL).exists || 
                               await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.ES.INVALID_EMAIL).exists).ok()
                
                break;

            case MESSAGE_ERRORS.TYPE.INVALID_PASSWORD:
                await t.expect(await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.EN.INVALID_PASSWORD).exists || 
                               await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.ES.INVALID_PASSWORD).exists).ok()
                break;

            case MESSAGE_ERRORS.TYPE.INVALID_CREDENTIALS:
                await t.expect(await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.EN.INVALID_CREDENTIALS).exists || 
                               await this.invalidCredentialsMessage.withText(MESSAGE_ERRORS.ES.INVALID_CREDENTIALS).exists).ok()
                break;
        
            default:
                break;
        }
    }
}

export default new LoginPage