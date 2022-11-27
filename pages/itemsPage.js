const { ifError } = require("assert");
const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");



const brandItemsLocator = `//p[@data-component='ProductCardBrandName']`


class ItemsPage extends BasePage
{

    async getBrandItems()
    {
        // const hello = await this.findByXpath(itemIDLocator)
        // return await this.findByXpath(this.itemIDLocator).getText();
        const items = await this.findAllByXpath(brandItemsLocator);
        const products = []
        for (let i = 0; i < items.length; i++)
        {
            products.push(await this.getItemText(items[i]))
        }
        // items.forEach(element =>
        // {
        //     this.getItemText(element)
        // });
        // return await this.getItemText(hello)
        return products;
    }


}

module.exports = ItemsPage;
