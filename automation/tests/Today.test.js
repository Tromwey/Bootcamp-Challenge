import { TASK, URLS } from "../data/constants"
import { STANDARD_USER } from "../data/roles"
import  todayPage from "../pages/today-page"
import inboxPage from "../pages/inbox-page"
import basePage from "../pages/base-page"
import projectPage from "../pages/project-page"

fixture ('Today - Tasks Creation feature test')
    .page `${URLS.BASE_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })
    .afterEach( async () => {
        await inboxPage.cleanUp()
    })

test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task by providig a name', async () => {
    await todayPage.createTasks()
    await inboxPage.assertCreatedTasks(TASK.DEFAULT_NAME, TASK.TODAY, TASK.SINGLE_TASK)
})

test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task selecting tomorow as due date', async () => {
    await todayPage.createTasks(TASK.SINGLE_TASK,TASK.TOMORROW)
    await inboxPage.assertCreatedTasks(TASK.DEFAULT_NAME, TASK.TOMORROW, TASK.SINGLE_TASK)
})

test.meta({ feature: 'today' })('As a user, I should be able to create multiple tasks', async () => {
    await todayPage.createTasks(TASK.MANY_TASKS)
    await inboxPage.assertCreatedTasks(TASK.DEFAULT_NAME, TASK.TODAY, TASK.MANY_TASKS)
})

fixture.only('Today - project creation feature test')
    .page `${URLS.BASE_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })
    .afterEach( async () => {
        await projectPage.cleanUp()
    })

test.meta({ feature: 'today' })('As a user, I should be able to create a new project', async () => {
    await basePage.createProject()
    await basePage.makeProjectFav()
    await basePage.assertCreatedProject(TASK.DEFAULT_NAME, basePage.greenBlueProjectColor)
})