import { Selector, t } from "testcafe"
import { COLOR, LIST, TASK, TIME } from "../data/constants"

class BasePage {
    constructor(){
        this.barButton = Selector('.top_bar_btn')
        this.userButton = Selector('.user_avatar')
        this.inboxButton = Selector('#list_holder>ul>li')
        this.newProjectButton = Selector('.expansion_panel__actions')
        this.newProjectNameTextBox = Selector('#edit_project_modal_field_name')
        this.newProjectColorDropdown = Selector('.color_dropdown_select__name')

        this.confirmProjectButton = Selector('button[type="submit"]')
        this.newestProjectOption = Selector('#projects_list>li').nth(LIST.LAST_ITEM)
        this.makeFavoriteButton = Selector('.ist_menu').find('.project_add_favorite_action')
        this.favoriteProjectOption = Selector('.sidebar_expansion_panel ').find('.reactist')
        this.editFavoriteProjectButton = Selector('.popper>ul>li')
        this.favoriteProjectNameTextBox = Selector('.form_field').child('input')
        this.favoriteProjectCheckOption = Selector('.form_field form_field_inline').find('.reactist_switch reactist_switch--checked')
        
        this.greenBlueProjectColorOption = Selector('.popper>div>ul>li').nth(COLOR.TEAL)
    }

    async createProject(){

        await t.click(this.newProjectButton)
        await t.typeText(this.newProjectNameTextBox,TASK.DEFAULT_NAME, {paste: true})
        await t.click(this.newProjectColorDropdown)
        await t.click(this.greenBlueProjectColorOption)
        await t.click(this.confirmProjectButton)
        await t.wait(TIME.MAX_RESPONSE_TIME)
    }

    async makeProjectFav(){
        await t.rightClick(this.newestProjectOption)
        await t.click(this.makeFavoriteButton)
        await t.wait(TIME.MAX_RESPONSE_TIME)
    }

    async assertCreatedProject(name, color){
        await t.rightClick(this.favoriteProjectOption)
        await t.wait(TIME.MIN_RESPONSE_TIME)
        await t.click(this.editFavoriteProjectButton)
        await t.expect(this.favoriteProjectNameTextBox.withAttribute('value',name).exists).ok()
        await t.click(this.newProjectColorDropdown)
        await t.hover(this.greenBlueProjectColorOption)
        await t.expect(color.withAttribute('aria-checked','true').exists).ok()
        await t.click(this.newProjectColorDropdown)
        await t.pressKey('esc')
    }
}

export default new BasePage