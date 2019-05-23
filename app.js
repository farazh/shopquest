const express = require('express');
const upcExtract = require("./upc-extract");
const app = express();
const port = process.env.PORT || 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //self certificate error
require('isomorphic-fetch');
const priceMatchItem = require("./price-match-item");

  app.get("/", (req, res) => {
    const { tc } = req.query;
    fetch(`https://apic.wal-mart.com/si/tecmdm/cthrealtime/orders/CA/${tc}`, {
      headers: {
        "Accept": "application/vnd.walmart.cth-v1+json",
        "Content-Type": "application/json",
        "WMT-API-KEY": "f36f2e48-a7cb-4481-924e-8c9d6f33938c",
        "WMT-API-SECRET": "rU5mF6fG3iI5fJ0bQ2xR0uL3pE3vX3eH7aX7qD8uE3xS2uH7aY"
      }
    }).then(res => res.json())
      .then(res => {
        const items = upcExtract(res);
        let itemPromise = [];
        items.map(item => {
          itemPromise.push(priceMatchItem(item));
        })
        Promise.all(itemPromise).then(allItems => console.log(allItems));
      });
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
