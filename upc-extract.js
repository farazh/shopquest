const mockResponse = require("./mock-receipt-response");
const checkDigit = require("./check-digit");

module.exports = function upcExtract(data) {
  const items =
    data.content.sale.order.CustomerOrder.SalesOrder.SalesOrderLineItem;
  const ITEMS = items.map(item => {
    return {
      name: item.SalesOffering.name,
      image: null,
      upc: item.SalesOffering.upc,
      salePrice: item.SalesOffering.Price.amount,
      matchedPrice: item.SalesOffering.Price.amount,
      merchant: "Walmart Canada"
    }});
  const upcs = ITEMS.map(item => {
    const updatedUpc = item.upc.slice(0, item.upc.length - 1);
    const trimmedUpc = updatedUpc.substr(updatedUpc.length - 11);
    const finalUpc = trimmedUpc + checkDigit(trimmedUpc);

    return {
      ...item,
      upc: finalUpc,
      sku: trimmedUpc
    }
  });
  return upcs;
}

