const { request } = require("graphql-request");
const catalogService = require("./catalog-service");
const getLowestPrice = require("./upc-itemdb-price");

module.exports = function priceMatchItem(item) {
	const CatalogPromise = catalogService(item);
	const ItemDbPromise = getLowestPrice(item.upc);
	//const amazonPromise = getAmazonLowestPrice(item)
	return Promise.all([CatalogPromise, ItemDbPromise]).then((response) => {
		const catalogData = response[0];
		const itemDbData = response[1];
		return {
			...item,
			name: catalogData.skuByBarcode ? catalogData.skuByBarcode.name : item.name,
			image: catalogData.skuByBarcode && catalogData.skuByBarcode.image,
			//matchedPrice: Math.min(itemDbData.price, item.price)
		}
	})
}