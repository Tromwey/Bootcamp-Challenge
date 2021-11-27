import { Selector, t } from "testcafe"
import { PARAMETERS, TASK } from "../data/constants"

class TodayPage {
    constructor(){
        this.todayPageTitle = Selector('.simple_content').withText('Hoy')
        this.createTaskButton = Selector('.plus_add_button')
        

        this.taskName = Selector('div.DraftEditor-editorContainer > div')
        this.taskDescription = Selector('.task_editor__description_field')
        this.confirmTaskButton = Selector('.reactist_button')

        this.taskItem = Selector('.data-selection-id')
    }


    async createTask(name = TASK.DEFAULT_NAME){
        await t
            .typeText(this.taskName, name, {paste: true})
            .click(this.confirmTaskButton)
    }

    async createOneTask(){
        await t.click(this.createTaskButton)
        await this.createTask()
        await t.wait(TASK.RESPONSE_TIME)
    }

    async createManyTasks(numberOfTasks){
        await t.click(this.createTaskButton)
        for(let i = 0; i < numberOfTasks; i++){
            await this.createTask(TASK.DEFAULT_NAME + i)
        }
        await t.wait(TASK.RESPONSE_TIME)
    }

    async taskCounter(){
        await t.console.log(taskCount = this.taskItem.count)
        return taskCount
    }

    async assertTaskCount(expectedCount){
        await expect(expectedCount = taskCounter()).ok()
    }
}

export default new TodayPage