require('isomorphic-fetch');

fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`)
    .then(res => res.json())
    .then(res => res.items[0].asin)
    .then(asin => {
      console.log("=== ASIN", asin);
      fetch(`https://www.amazon.ca/gp/offer-listing/${asin}/ref=olp_f_new?f_new=true`)
        .then(res => res.text())
        .then(html => {
          const $ = cheerio.load(html);
          const price = $("div[role='row']>div[role='gridcell']:first-child").text().replace(/\s/g,'');
          
          console.log("=== Price", price);
          const timeAfter = performance.now();
          console.log(`=== Amazon scrape took ${timeAfter - timeBefore} milliseconds via cheerio`);
        })
    })