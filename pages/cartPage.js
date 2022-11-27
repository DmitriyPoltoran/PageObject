const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");



const itemPriceLocator = `//p[@data-testid='item-regularPrice']`
const itemDescriptionLocator = `//a[@data-testid='item-description']`
const itemIDLocator = `//p[@class='_b1d204 ltr-1gp3mca-Footnote e1s5vycj0']/*[2]`


class CartPage extends BasePage
{

    async getItemID()
    {
        // const hello = await this.findByXpath(itemIDLocator)
        // return await this.findByXpath(this.itemIDLocator).getText();
        return await this.getItemText(await this.findByXpath(itemIDLocator))
        // return await this.getItemText(hello)
    }

    async getItemDescription()
    {
        // return await this.findByXpath(this.itemDescriptionLocator).getText();
        return await this.getItemText(await this.findByXpath(itemDescriptionLocator))

        // const hello = await this.findByXpath(itemDescriptionLocator)
        // return await this.getItemText(hello)

    }

    async getItemPrice()
    {
        // return await this.findByXpath(this.itemPriceLocator).getText();
        return await this.getItemText(await this.findByXpath(itemPriceLocator))
        // const hello = await this.findByXpath(itemPriceLocator)
        // return await this.getItemText(hello)

    }


}

module.exports = CartPage;
