import { Selector, t } from "testcafe"
import { URLS, CREDENTIALS, TASK } from "../data/constants"
import { STANDARD_USER } from "../data/roles"
import loginPage from "../pages/login-page"

class TodayPage {
    constructor(){
        this.todayPageTitle = Selector('.top_bar_btn')
        this.createTaskButton = Selector('.plus_add_button')
        

        this.taskName = Selector('div.DraftEditor-editorContainer > div')
        this.taskDescription = Selector('.task_editor__description_field')
        this.taskDueDateButton = Selector('.item_due_selector')
        this.dueDateTomorrowButton = Selector('.scheduler-suggestions-item-icon--tomorrow')
        this.confirmTaskButton = Selector('.reactist_button')

        this.firstItem = Selector('.task_list_item')
        this.moreOptionsButton = Selector('.more_actions_button')
        this.deleteTaskButton = Selector('.popper>ul>li').nth(11)
        this.confirmDeleteButton = Selector('button[type="submit"]')

        this.userButton = Selector('.user_avatar')
        this.logOutButton = Selector('.user_menu>button').nth(1)

        this.taskItem = Selector('.data-selection-id')
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

    async createSingleTask(){
        await this.createTasks()
    }

    async createManyTasks(){
        await this.createTasks(TASK.MANY_TASKS)
    }

    async createTaskDueTomorrow(){
        await this.createTasks(TASK.SINGLE_TASK,TASK.TOMORROW)
    }

    async deleteTaskByRigthClick(){
        await t
            .rightClick(this.firstItem)
            .click(this.deleteTaskButton)
            .click(this.confirmDeleteButton)
            .wait(TASK.RESPONSE_TIME)
    }
    
    async deleteTaskByMoreOptionsMenu(){
        await t
            .hover(this.firstItem)
            .click(this.moreOptionsButton)
            .click(this.deleteTaskButton)
            .click(this.confirmDeleteButton)
            .wait(TASK.RESPONSE_TIME)
    }

    async logOut(){
        await t
            .click(this.userButton)
            .click(this.logOutButton)
    }

    async reloadSessionByLoginOut(){
        await this.logOut()
        await t.useRole(STANDARD_USER)
    }

    async reloadSessionByLoginOut2(){
        await this.logOut()
        await t.navigateTo(URLS.BASE_URL)
        await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
    }

    async reloadSessionByNavigatingToToday(){
        await t.navigateTo(URLS.TODAY_URL)
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