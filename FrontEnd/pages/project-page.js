import { Selector, t } from "testcafe"
import { LIST, TIME } from "../data/constants"

class ProjectPage {
    constructor(){
        this.projectMoreOptionsButton = Selector('button').withAttribute('aria-label', 'Project options menu')
        this.deleteProjectButton = Selector('.popper>ul>li').nth(LIST.LAST_ITEM)
        this.confirmDeleteProjectButton = Selector('button[type="submit"]')
    }

    async cleanUp(){
        await t.click(this.projectMoreOptionsButton)
        await t.click(this.deleteProjectButton)
        await t.click(this.confirmDeleteProjectButton)
        await t.wait(TIME.MAX_RESPONSE_TIME)
    }
}

export default new ProjectPage