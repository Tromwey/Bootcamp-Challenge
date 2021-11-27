import { PARAMETERS, TASK, URLS } from "../data/constants"
import todayPage from "../pages/today-page"
import { STANDARD_USER } from "../data/roles"

fixture ('today feature test')
    .page `${URLS.BASE_URL}`

test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task by providig a name', async t => {
    await t.useRole(STANDARD_USER)
    await todayPage.createTask()
    //await todayPage.assertTaskCount(1)
})


test.meta({ feature: 'today' })('As a user, I should be able to create a task by providig a name', async t => {
    await t.useRole(STANDARD_USER)
    await todayPage.createManyTasks(TASK.NUMBER_OF_TASKS)
    //await todayPage.assertTaskCount(1)
})
