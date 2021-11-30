import { Selector, t } from "testcafe"
import { TASK } from "../data/constants"
import basePage from "./base-page"

class InboxPage {
    constructor(){
        this.item = Selector('.task_list_item__content')

        this.itemDueDateToday = Selector(this.item.child('div').nth(1).child('button').child('span').withAttribute('class','date date_today'))
        this.itemDueDateTomorrow = Selector(this.item.child('div').nth(1).child('button').child('span').withAttribute('class','date date_tom'))


        this.moreOptionsButton = Selector('.more_actions_button')
        this.deleteTaskButton = Selector('.popper>ul>li').nth(13)
        this.confirmDeleteButton = Selector('button[type="submit"]')
    }

    async assertCreatedTask(name, dueDate){

        await t.click(basePage.inboxButton)
        await t.expect(this.item.withText(name).exists).ok()

        switch (dueDate) {
            case TASK.TODAY:
                await t.expect(this.itemDueDateToday.exists).ok()
                break;

            case TASK.TOMORROW:
                await t.expect(this.itemDueDateTomorrow.exists).ok()
                break;

            default:
                break;
        }
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