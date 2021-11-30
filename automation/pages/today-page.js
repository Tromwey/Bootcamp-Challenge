import { Selector, t } from "testcafe"
import { TASK } from "../data/constants"

class TodayPage {
    constructor(){
        this.createTaskButton = Selector('.plus_add_button')

        this.taskName = Selector('div.DraftEditor-editorContainer > div')
        this.taskDescription = Selector('.task_editor__description_field')
        this.taskDueDateButton = Selector('.item_due_selector')
        this.dueDateTomorrowButton = Selector('.scheduler-suggestions-item-icon--tomorrow')
        this.confirmTaskButton = Selector('.reactist_button')
    }

    async createTasks(numberOfTasks = TASK.SINGLE_TASK, due = TASK.TODAY, name = TASK.DEFAULT_NAME){
        await t
            .click(this.createTaskButton)

        for(let i = 0; i < numberOfTasks; i++){
            await t.typeText(this.taskName, name + i, {paste: true})
            if (due == TASK.TOMORROW){
                await t
                    .click(this.taskDueDateButton)
                    .click(this.dueDateTomorrowButton)
            }
            await t.click(this.confirmTaskButton)
        }
        await t.wait(TASK.RESPONSE_TIME)
    }
}

export default new TodayPage