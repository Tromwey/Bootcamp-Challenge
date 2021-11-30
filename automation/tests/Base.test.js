import { URLS } from "../data/constants"
import basePage from "../pages/today-page"
import { STANDARD_USER } from "../data/roles"

fixture ('Today - project creation feature test')
    .page `${URLS.BASE_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })

test.meta({ feature: 'base' })('As a user, I should be able to create a new project', async () => {
    await basePage.createProject()
    await basePage.makeProjectFav()
})