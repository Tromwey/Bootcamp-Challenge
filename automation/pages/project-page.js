import { Selector, t } from "testcafe"
import basePage from "./base-page"

class ProjectPage {
    constructor(){
        this.projectMoreOptionsButton = Selector('.view_header__actions').child('button').nth(2)
        this.deleteProjectButton = Selector('.popper>ul>li').nth(12)
    }

    async cleanUp(){
        await t.click(this.projectMoreOptionsButton)
        await t.click(this.deleteProjectButton)
        await t.wait(1000)
    }
}

export default new ProjectPage