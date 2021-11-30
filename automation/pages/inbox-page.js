import { Selector, t } from "testcafe"
import { URLS, CREDENTIALS, TASK } from "../data/constants"
import { STANDARD_USER } from "../data/roles"
import loginPage from "../pages/login-page"
import basePage from "./base-page"

class InboxPage {
    constructor(){
        this.item = Selector('.task_list_item__content')
        this.moreOptionsButton = Selector('.more_actions_button')
        this.deleteTaskButton = Selector('.popper>ul>li').nth(13)
        this.confirmDeleteButton = Selector('button[type="submit"]')

    }

    async deleteTaskByRigthClick(){
        await t
            .rightClick(this.item)
            .click(this.deleteTaskButton)
            .click(this.confirmDeleteButton)
            //.wait(TASK.RESPONSE_TIME)
    }

    async deleteTaskByMoreOptionsMenu(){
        await t
            .hover(this.item)
            .click(this.moreOptionsButton)
            .click(this.deleteTaskButton)
            .click(this.confirmDeleteButton)
            //.wait(TASK.RESPONSE_TIME)
    }

    async cleanUp(){
        await t.click(basePage.inboxButton)
        while(await this.item.count){
            await this.deleteTaskByRigthClick()
        }
        await t.wait(TASK.RESPONSE_TIME)
    }
}

export default new InboxPage