const getAmazonLowestPrice = price => {
  const firstDollarIndex = price.indexOf("$") + 1;
  const firstPeriodPlus2 = price.indexOf(".") + 3;
  const lowestPrice = price.substring(firstDollarIndex, firstPeriodPlus2);
  console.log(lowestPrice.replace(/,/g,''));
}