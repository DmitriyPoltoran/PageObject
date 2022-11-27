const BasePage = require("./basePage");

const itemPriceLocator = `//p[@data-testid='item-regularPrice']`
const itemDescriptionLocator = `//a[@data-testid='item-description']`
const itemIDLocator = `//p[@class='_b1d204 ltr-1gp3mca-Footnote e1s5vycj0']/*[2]`


class CartPage extends BasePage
{

    async getItemID()
    {
        return await this.getItemText(await this.findByXpath(itemIDLocator))
    }

    async getItemDescription()
    {
        return await this.getItemText(await this.findByXpath(itemDescriptionLocator))
    }

    async getItemPrice()
    {
        return await this.getItemText(await this.findByXpath(itemPriceLocator))
    }


}
module.exports = CartPage;
