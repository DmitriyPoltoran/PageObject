const { By, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const CartPage = require("./cartPage");

const itemPriceLocator = `//p[@class='ltr-194u1uv-Heading e54eo9p0']`
const itemDescriptionLocator = `//p[@class='ltr-13ze6d5-Body efhm1m90']`
const itemIDLocator = `//span[text()=' 18686575']`
const buttonAddToCartLocator = `//button[@data-tstid='addToBag']`
const buttonGoToCartLocator = `//a[@data-tstid='addToBag']`


class ItemPage extends BasePage
{
    static PAGE_URL = 'https://www.farfetch.com/kz/shopping/men/rolex-cosmograph-daytona-rainbow-pre-owned-40-2013-item-18686575.aspx?storeid=13792';

    openPage = async () => super.openPage(ItemPage.PAGE_URL);

    async getItemID()
    {
        // return await this.findByXpath(this.itemIDLocator).getText();
        return await this.getItemText(await this.findByXpath(itemIDLocator))
    }

    async getItemDescription()
    {
        // return await this.findByXpath(this.itemDescriptionLocator).getText();
        return await this.getItemText(await this.findByXpath(itemDescriptionLocator))
    }

    async getItemPrice()
    {
        // return await this.findByXpath(this.itemPriceLocator).getText();
        return await this.getItemText(await this.findByXpath(itemPriceLocator))
    }


    async addToCart()
    {

        let button = await this.findByXpath(buttonAddToCartLocator);
        await button.click();
        button = await this.findByXpath(buttonGoToCartLocator);
        await button.click();

        // await this.driver.wait(until.elementLocated(By.xpath(buttonAddToCartLocator)), 5000);
        // await this.driver.findElement(By.xpath(buttonAddToCartLocator)).click();

        // await this.driver.wait(until.elementLocated(By.xpath(buttonGoToCartLocator)), 5000);
        // await this.driver.findElement(By.xpath(buttonGoToCartLocator)).click();


        return new CartPage(this.driver)
    }
}

module.exports = ItemPage;