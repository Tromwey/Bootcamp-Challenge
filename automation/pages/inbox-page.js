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

    async assertCreatedTasks(name, dueDate, numberOfTasks){

        await t.click(basePage.inboxButton)

        for (let i = 0; i < numberOfTasks; i++) {
            await t.expect(this.item.nth(i).withText(name+i).exists).ok()

            switch (dueDate) {
                case TASK.TODAY:
                    await t.expect(this.item.nth(i).child('div').nth(1).child('button').child('span').withAttribute('class','date date_today').exists).ok()
                    break;
    
                case TASK.TOMORROW:
                    await t.expect(this.item.nth(i).child('div').nth(1).child('button').child('span').withAttribute('class','date date_tom').exists).ok()
                    break;
    
                default:
                    break;
            }
            
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