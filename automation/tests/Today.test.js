import { TASK, URLS } from "../data/constants"
import  todayPage from "../pages/today-page"
import { STANDARD_USER } from "../data/roles"
import inboxPage from "../pages/inbox-page"

fixture ('Today - Tasks Creation feature test')
    .page `${URLS.BASE_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })
    .afterEach( async () => {
        await inboxPage.cleanUp()
    })

test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task by providig a name', async t => {
    await todayPage.createTasks()
})

test.meta({ feature: 'today' })('As a user, I should be able to create a task selecting tomorow as due date', async t => {
    await todayPage.createTasks(TASK.SINGLE_TASK,TASK.TOMORROW)
})

test.meta({ feature: 'today' })('As a user, I should be able to create multiple tasks', async t => {
    await todayPage.createTasks(TASK.MANY_TASKS)
})