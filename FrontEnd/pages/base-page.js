import { Selector, t } from "testcafe"
import { TASK } from "../data/constants"
import { STANDARD_USER } from "../data/roles"

class BasePage {
    constructor(){
        this.barButton = Selector('.top_bar_btn')
        this.userButton = Selector('.user_avatar')
        this.logOutButton = Selector('.user_menu>button').nth(1)


        this.inboxButton = Selector('#list_holder>ul>li').nth(0)

        this.newProjectButton = Selector('.expansion_panel__actions').nth(0)
        this.newProjectNameTextBox = Selector('#edit_project_modal_field_name')
        this.newProjectColorDropdown = Selector('.color_dropdown_select__name')
        this.greenBlueProjectColorOption = Selector('.popper>div>ul>li').nth(8)
        this.confirmProjectButton = Selector('button[type="submit"]')
        this.newestProjectOption = Selector('#projects_list>li').nth(-1)
        this.makeFavoriteButton = Selector('.ist_menu').find('.project_add_favorite_action')

        this.favoriteProjectOption = Selector('.sidebar_expansion_panel ').nth(0).child('div').nth(1)
        this.editFavoriteProjectButton = Selector('.popper>ul>li').nth(0)
        this.favoriteProjectNameTextBox = Selector('.form_field').child('input')
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

        await t.click(this.newProjectButton)
        await t.typeText(this.newProjectNameTextBox,TASK.DEFAULT_NAME, {paste: true})
        await t.click(this.newProjectColorDropdown)
        await t.click(this.greenBlueProjectColorOption)
        await t.click(this.confirmProjectButton)
        await t.wait(TASK.RESPONSE_TIME)
    }

    async makeProjectFav(){
        await t.rightClick(this.newestProjectOption)
        await t.click(this.makeFavoriteButton)
        await t.wait(TASK.RESPONSE_TIME)
    }

    async assertCreatedProject(name, color){
        await t.rightClick(this.favoriteProjectOption)
        await t.wait(TASK.MIN_REPONSE_TIME)
        await t.click(this.editFavoriteProjectButton)
        await t.expect(this.favoriteProjectNameTextBox.withAttribute('value',name).exists).ok()
        await t.click(this.newProjectColorDropdown)
        await t.expect(color.withAttribute('aria-checked','true').exists).ok()
        await t.doubleClick(this.confirmProjectButton)
    }


}

export default new BasePage