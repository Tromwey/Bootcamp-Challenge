import { CREDENTIALS, PARAMETERS, TASK, URLS } from "../data/constants"
import todayPage from "../pages/today-page"
import { STANDARD_USER } from "../data/roles"
import loginPage from "../pages/login-page"

fixture ('today feature test')
    .page `${URLS.BASE_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })
    .afterEach( async t => {
        await todayPage.cleanUp()
    })

test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task by providig a name', async t => {
    await todayPage.createSingleTask()
    //await todayPage.reloadSessionByLoginOut()
    //await t.expect(todayPage.firstItem.exists).ok()
})

test.meta({ feature: 'today' })('As a user, I should be able to create a task selecting tomorow as due date', async t => {
    await todayPage.createTaskDueTomorrow()
})

test.meta({ feature: 'today' })('As a user, I should be able to create multiple tasks', async t => {
    await todayPage.createManyTasks()
})