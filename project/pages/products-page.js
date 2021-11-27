import { Selector } from "testcafe"

class ProductsPage {
    constructor(){
        this.productsPageTitle = Selector('.title').withText('Products')
    }
}

export default new ProductsPage