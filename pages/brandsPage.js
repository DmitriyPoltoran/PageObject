const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");
const ItemsPage = require("./itemsPage")



const brandLinkLocator = `//a[@data-test='T-link']`
const brandLocator = `//a[@name='dca8519']`


class BrandsPage extends BasePage
{

    static PAGE_URL = 'https://www.farfetch.com/kz/designers/men';

    openPage = async () => super.openPage(BrandsPage.PAGE_URL);


    async getBrandName()
    {
        // const hello = await this.findByXpath(itemIDLocator)
        // return await this.findByXpath(this.itemIDLocator).getText();
        return await this.getItemText(await this.findByXpath(brandLocator))
        // return await this.getItemText(hello)
    }

    async goToBrand()
    {
        const button = await this.findByXpath(brandLinkLocator);
        button.click()
        return this;
    }


    async clickBrandButon()
    {
        const button = await this.findByXpath(brandLocator);
        await button.click();

        return new ItemsPage(this.driver);
    }

}

module.exports = BrandsPage;
