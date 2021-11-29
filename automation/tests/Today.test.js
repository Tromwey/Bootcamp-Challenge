import { CREDENTIALS, PARAMETERS, TASK, URLS } from "../data/constants"
import todayPage from "../pages/today-page"
import { STANDARD_USER } from "../data/roles"
import loginPage from "../pages/login-page"

fixture ('today feature test')
    .page `${URLS.BASE_URL}`

test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task by providig a name', async t => {
    await t.useRole(STANDARD_USER)
    await todayPage.createSingleTask()
    await todayPage.logOut()
    await t.navigateTo(URLS.BASE_URL)
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
    //await t.eval(() => location.reload(true))
    //await t.wait(5000)
    await t.expect(todayPage.firstItem.exists).ok()
    await todayPage.deleteTaskByRigthClick()
    //await todayPage.assertTaskCount(1)
})

//test.meta({ feature: 'today', type: 'smoke' })('As a user, I should be able to create a task by providig a name', async t => {
//    await t.useRole(STANDARD_USER)
//    await todayPage.logOut()
//    await t.useRole(STANDARD_USER)
//    await t.
//})

//test.meta({ feature: 'today' })('As a user, I should be able to create a task by providig a name', async t => {
//    await t.useRole(STANDARD_USER)
//    await todayPage.createTaskDueTomorrow()
//    //await todayPage.deleteTask()
//    //await todayPage.assertTaskCount(1)
//})
//
//test.meta({ feature: 'today' })('As a user, I should be able to create a task by providig a name', async t => {
//    await t.useRole(STANDARD_USER)
//    await todayPage.createManyTasks()
//    //await todayPage.assertTaskCount(1)
//})
