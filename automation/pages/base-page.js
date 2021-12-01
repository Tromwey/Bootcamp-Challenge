import { Selector, t } from "testcafe"
import { TASK } from "../data/constants"
import { STANDARD_USER } from "../data/roles"

class BasePage {
    constructor(){
        this.barButton = Selector('.top_bar_btn')
        this.userButton = Selector('.user_avatar')
        this.logOutButton = Selector('.user_menu>button').nth(1)


        this.inboxButton = Selector('#list_holder>ul>li').nth(0)

        this.newProyectButton = Selector('.expansion_panel__actions').nth(0)
        this.newProyectName = Selector('#edit_project_modal_field_name')
        this.newProyectColor = Selector('.color_dropdown_select__name')
        this.greenBlueProjectColor = Selector('.popper>div>ul>li').nth(8)
        this.confirmProject = Selector('button[type="submit"]')
        this.newestProject = Selector('#projects_list>li').nth(-1)
        this.makeFavoriteButton = Selector('.ist_menu').find('.project_add_favorite_action')

        this.favoriteProject = Selector('.sidebar_expansion_panel ').nth(0).child('div').nth(1)
        this.editFavoriteProject = Selector('.popper>ul>li').nth(0)
        this.favoriteProjectName = Selector('.form_field').child('input')
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

    async createProject(){

        await t.click(this.newProyectButton)
        await t.typeText(this.newProyectName,TASK.DEFAULT_NAME, {paste: true})
        await t.click(this.newProyectColor)
        await t.click(this.greenBlueProjectColor)
        await t.click(this.confirmProject)
        await t.wait(TASK.RESPONSE_TIME)
    }

    async makeProjectFav(){
        await t.rightClick(this.newestProject)
        await t.click(this.makeFavoriteButton)
        await t.wait(TASK.RESPONSE_TIME)
    }

    async assertCreatedProject(name, color){
        await t.rightClick(this.favoriteProject)
        await t.click(this.editFavoriteProject)
        await t.expect(this.favoriteProjectName.withAttribute('value',name).exists).ok()
        await t.click(this.newProyectColor)
        await t.expect(color.withAttribute('aria-checked','true').exists).ok()
        await t.doubleClick(this.confirmProject)
    }


}

export default new BasePage