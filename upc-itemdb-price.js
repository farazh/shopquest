const axios = require("axios");
const https = require('https');

const approvedMerchants = [
  "TheSource.ca",
  "Homedepot Canada",
  "Newegg Canada",
  "Hudson's Bay",
  "WalMart Canada",
  "Sears Canada"
];

module.exports = function getLowestPrice(upc, price = 90.0) {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  axios
    .get(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`, { httpsAgent: agent })
    .then(res => {
      const offers = res.data.items[0].offers;

      const approvedOffers = offers.filter(offer =>
        approvedMerchants.includes(offer.merchant)
      );

      const lowestPrice = approvedOffers.reduce(
        (min, offer) => (offer.price < min ? offer.price : min),
        price
      );
      return lowestPrice;
    })
    .catch(err => {
      console.log(err);
    });
  }