// const webdriver = require("selenium-webdriver");
const { expect } = require('chai');
const ItemPage = require("../pages/ItemPage");

const { Builder } = require('selenium-webdriver');
require("chromedriver");

const capabilities = require("../capabilities.json");
const BrandsPage = require('../pages/brandsPage');

describe('Add items to bag test.', () =>
{
    const serverUrl = 'http://dimapoltoran_IjBl9W:A7pxi2zMYatbDpsC8LG6@hub-cloud.browserstack.com/wd/hub';

    beforeEach(async function ()
    {
        // this.driver = new webdriver.Builder()
        //     .usingServer(serverUrl)
        //     .withCapabilities({
        //         ...capabilities,
        //         ...capabilities['browser'] && { browserName: capabilities['browser'] }
        //     })
        //     .build();
        this.driver = await new Builder().forBrowser('chrome').build();

        await this.driver.manage().window().maximize();
    });

    it('Should all items with brand name', async function ()
    {
        const brandsPage = new BrandsPage(this.driver);
        await brandsPage.openPage();
        await brandsPage.goToBrand();

        const brandName = await brandsPage.getBrandName();

        const brandsItemsPage = await brandsPage.clickBrandButon()

        expect(await brandsItemsPage.getBrandItems()).to.be.contain(brandName);

    }).timeout(90000);

    afterEach(async function ()
    {
        await this.driver.quit();
    })
});
