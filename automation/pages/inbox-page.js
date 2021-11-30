import { Selector, t } from "testcafe"
import { TASK } from "../data/constants"
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
    }

    async deleteTaskByMoreOptionsMenu(){
        await t
            .hover(this.item)
            .click(this.moreOptionsButton)
            .click(this.deleteTaskButton)
            .click(this.confirmDeleteButton)
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