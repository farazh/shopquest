const { request } = require("graphql-request");

module.exports = function getNameAndImage(item) {
   const query = `{
      skuByBarcode(id: "${item.sku}") {
          id
          name {
              en_CA,
              fr_CA
          }
          images {
              small {url}
              large {url}
          }
      }
    }
    `
    return request("http://ca-catalog-services-prod.walmart.com/api", query);
}