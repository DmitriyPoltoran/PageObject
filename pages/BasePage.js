const { By, until } = require("selenium-webdriver");

class BasePage
{
    constructor(driver)
    {
        this.driver = driver;
    }

    async openPage(url)
    {
        await this.driver.get(url);

        return this;
    }

    async findByXpath(xpath)
    {
        return await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000)
    }

    async findAllByXpath(xpath)
    {
        return this.driver.wait(until.elementsLocated(By.xpath(xpath)), 8000);
    }

    async getItemText(item) 
    {
        return await item.getText();
    }

}

module.exports = BasePage;