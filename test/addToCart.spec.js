const webdriver = require("selenium-webdriver");
const { expect } = require('chai');
const ItemPage = require("../pages/ItemPage");

// const { Builder } = require('selenium-webdriver');
// require("chromedriver");

const capabilities = require("../capabilities.json");

describe('Add items to bag test.', () =>
{
    const serverUrl = 'http://dimapoltoran_IjBl9W:A7pxi2zMYatbDpsC8LG6@hub-cloud.browserstack.com/wd/hub';

    beforeEach(async function ()
    {
        this.driver = new webdriver.Builder()
            .usingServer(serverUrl)
            .withCapabilities({
                ...capabilities,
                ...capabilities['browser'] && { browserName: capabilities['browser'] }
            })
            .build();
        // this.driver = await new Builder().forBrowser('chrome').build();

        await this.driver.manage().window().maximize();
    });

    it('Should add item to the cart.', async function ()
    {
        const itemPage = new ItemPage(this.driver);
        await itemPage.openPage();

        const itemID = await itemPage.getItemID();
        const itemDescription = await itemPage.getItemDescription();
        const itemPrice = await itemPage.getItemPrice();

        const cartPage = await itemPage.addToCart();

        const itemIdInCart = await cartPage.getItemID();
        const itemDescriptionInCart = await cartPage.getItemDescription();
        const itemPriceInCart = await cartPage.getItemPrice();

        expect(itemID).to.contain(itemIdInCart);
        expect(itemDescription).to.contain(itemDescriptionInCart);
        expect(itemPrice).to.contain(itemPriceInCart);

    }).timeout(90000);

    afterEach(async function ()
    {
        await this.driver.quit();
    })
});
