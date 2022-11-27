const BasePage = require("./basePage");



const brandItemsLocator = `//p[@data-component='ProductCardBrandName']`


class ItemsPage extends BasePage
{

    async getBrandItems()
    {

        const items = await this.findAllByXpath(brandItemsLocator);
        const products = []
        for (let i = 0; i < items.length; i++)
        {
            products.push(await this.getItemText(items[i]))
        }

        return products;
    }


}

module.exports = ItemsPage;
