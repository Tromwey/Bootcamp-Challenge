import { TASK, URLS } from "../data/constants"
import { STANDARD_USER } from "../data/roles"
import basePage from "../pages/base-page"
import projectPage from "../pages/project-page"

fixture ('Project - project creation feature test')
    .page `${URLS.BASE_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })
    .afterEach( async () => {
        await projectPage.cleanUp()
    })

test.meta({ feature: 'project' })('As a user, I should be able to create a new project and add it as favorite', async (t) => {
    await basePage.createProject()
    await basePage.makeProjectFav()
    await basePage.assertCreatedProject(TASK.DEFAULT_NAME, basePage.greenBlueProjectColor)
})