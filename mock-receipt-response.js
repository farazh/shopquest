module.exports = {
  "content": {
      "sale": {
          "order": {
              "CustomerOrder": {
                  "LEGACY_customerOrderType": "CASH_SALE",
                  "SalesOrder": {
                      "OrderHeader": {
                          "orderId": null,
                          "customerOrderId": "10965172533612600743",
                          "terminalTransactionId": 799,
                          "orderTime": "2019-05-18T19:10:54-04:00",
                          "subTotal": 26.24,
                          "totalTax": 0.63,
                          "total": 26.87,
                          "numberOfLines": 6,
                          "numberOfOfferings": 0,
                          "LEGACY_scanCount": 6,
                          "balance": 26.87,
                          "Tax": [
                              {
                                  "category": 1,
                                  "taxAmount": 0.63,
                                  "taxRate": null,
                                  "description": "TAX 01"
                              }
                          ],
                          "BusinessUnit": {
                              "number": 3055,
                              "Address": {
                                  "street": null,
                                  "city": null,
                                  "state": null,
                                  "postalCode": null,
                                  "Location": {
                                      "countryCode": "CA"
                                  }
                              },
                              "Associate": [
                                  {
                                      "win": null,
                                      "Credentials": {
                                          "userId": null,
                                          "LEGACY_operatorNumber": 8245
                                      }
                                  }
                              ],
                              "Terminal": [
                                  {
                                      "id": 8
                                  }
                              ]
                          }
                      },
                      "Customer": {
                          "ucid": null,
                          "type": null,
                          "driverLicense": null,
                          "CustomerAccount": null
                      },
                      "Payment": [
                          {
                              "id": null,
                              "timeStamp": "2019-05-18T19:10:48-04:00",
                              "subTotal": null,
                              "taxAmount": null,
                              "total": null,
                              "cashbackAmount": 0,
                              "LEGACY_tenderType": "DEBIT_TENDER",
                              "customerSignature": null,
                              "PaymentInstrument": {
                                  "holderName": "",
                                  "type": "DEBIT_TENDER",
                                  "isPartialAuthorizationAllowed": false,
                                  "PaymentCard": {
                                      "cardNumber": null,
                                      "expirationDate": "2022-03",
                                      "suffixDigits": 8804,
                                      "LEGACY_cardType": null,
                                      "LEGACY_cardsubType": null,
                                      "BIN": 0,
                                      "PANSurrogate": [
                                          {
                                              "type": "CARD_XREF_FROM_EPAY",
                                              "value": "0000000055727105698"
                                          }
                                      ]
                                  }
                              },
                              "currency": null,
                              "tenderAmount": 26.87,
                              "pciCapability": true,
                              "cardEntryMethodCode": "DEBIT",
                              "floorLimit": true,
                              "PaymentAuthorization": [
                                  {
                                      "id": null,
                                      "referenceNumber": "001001947",
                                      "approvalNumber": "690548",
                                      "authResultCode": null,
                                      "authorizationDate": null,
                                      "authResultDescription": null,
                                      "authorizedAmount": 26.87,
                                      "authorizerId": null,
                                      "networkId": "9999",
                                      "authorizedCashbackAmount": 0,
                                      "LEGACY_epsACQualifier": "PAY_FROM_DAILY_BATCH",
                                      "PaymentCardAuthorization": null,
                                      "offlineAuthorization": false,
                                      "cardBalance": null
                                  }
                              ]
                          }
                      ],
                      "Offer": [],
                      "SalesOrderLineItem": [
                          {
                              "id": null,
                              "entryTime": null,
                              "fulfillmentOrderId": null,
                              "lineNumber": 1,
                              "quantity": 0.663,
                              "uom": "KILOGRAM",
                              "NOF": false,
                              "subtotal": null,
                              "total": 14.57,
                              "BusinessUnit": null,
                              "Price": {
                                  "amount": 21.98,
                                  "currency": null,
                                  "priceType": "REGULAR"
                              },
                              "Offer": [],
                              "PriceOverride": null,
                              "Tax": [],
                              "SalesOffering": {
                                  "id": "0031022845",
                                  "upc": "0000000000224029000000",
                                  "name": "SALM FILL VP",
                                  "receiptName": "SALM FILL VP",
                                  "description": "ATL SALMON FILL VP",
                                  "shortDescription": "SALM FILL VP",
                                  "serialNumber": null,
                                  "authorizationNumber": null,
                                  "accountNumber": null,
                                  "virtualAccountNumber": null,
                                  "transactionType": null,
                                  "authorizationType": null,
                                  "authorizationStatus": null,
                                  "approved": false,
                                  "Price": {
                                      "amount": 21.98,
                                      "currency": null,
                                      "priceType": "REGULAR"
                                  },
                                  "Department": {
                                      "id": 83
                                  },
                                  "Offer": null,
                                  "SalesOfferingFeature": null,
                                  "Tax": null
                              },
                              "Payment": null,
                              "CustomerOrderLineLog": {
                                  "handKeyedBarCode": false,
                                  "qtyEntered": true,
                                  "repeatKey": false,
                                  "scannedItem": true,
                                  "exchangeItem": false,
                                  "voidItem": false,
                                  "packaged": false,
                                  "embeddedPrice": true,
                                  "keyedItem": false,
                                  "multiprice": false,
                                  "scanType": "UPC_A"
                              }
                          },
                          {
                              "id": null,
                              "entryTime": null,
                              "fulfillmentOrderId": null,
                              "lineNumber": 2,
                              "quantity": 1,
                              "uom": null,
                              "NOF": false,
                              "subtotal": null,
                              "total": 2.47,
                              "BusinessUnit": null,
                              "Price": {
                                  "amount": 2.47,
                                  "currency": null,
                                  "priceType": "ROLLBACK_ADMATCH"
                              },
                              "Offer": [],
                              "PriceOverride": null,
                              "Tax": [],
                              "SalesOffering": {
                                  "id": "0009298973",
                                  "upc": "0000000000065912581210",
                                  "name": "RLEMON",
                                  "receiptName": "RLEMON",
                                  "description": "REALEMON JUICE 945",
                                  "shortDescription": "RLEMON",
                                  "serialNumber": null,
                                  "authorizationNumber": null,
                                  "accountNumber": null,
                                  "virtualAccountNumber": null,
                                  "transactionType": null,
                                  "authorizationType": null,
                                  "authorizationStatus": null,
                                  "approved": false,
                                  "Price": {
                                      "amount": 2.47,
                                      "currency": null,
                                      "priceType": "ROLLBACK_ADMATCH"
                                  },
                                  "Department": {
                                      "id": 95
                                  },
                                  "Offer": null,
                                  "SalesOfferingFeature": null,
                                  "Tax": null
                              },
                              "Payment": null,
                              "CustomerOrderLineLog": {
                                  "handKeyedBarCode": false,
                                  "qtyEntered": false,
                                  "repeatKey": false,
                                  "scannedItem": true,
                                  "exchangeItem": false,
                                  "voidItem": false,
                                  "packaged": false,
                                  "embeddedPrice": false,
                                  "keyedItem": false,
                                  "multiprice": false,
                                  "scanType": "UPC_A"
                              }
                          },
                          {
                              "id": null,
                              "entryTime": null,
                              "fulfillmentOrderId": null,
                              "lineNumber": 3,
                              "quantity": 1,
                              "uom": null,
                              "NOF": false,
                              "subtotal": null,
                              "total": 2.47,
                              "BusinessUnit": null,
                              "Price": {
                                  "amount": 2.47,
                                  "currency": null,
                                  "priceType": "REGULAR"
                              },
                              "Offer": [],
                              "PriceOverride": null,
                              "Tax": [],
                              "SalesOffering": {
                                  "id": "0031122092",
                                  "upc": "0000000000850582002000",
                                  "name": "STRAWBERRIES",
                                  "receiptName": "STRAWBERRIES",
                                  "description": "STRAWBERRIES 454GR",
                                  "shortDescription": "STRAWBERRIES",
                                  "serialNumber": null,
                                  "authorizationNumber": null,
                                  "accountNumber": null,
                                  "virtualAccountNumber": null,
                                  "transactionType": null,
                                  "authorizationType": null,
                                  "authorizationStatus": null,
                                  "approved": false,
                                  "Price": {
                                      "amount": 2.47,
                                      "currency": null,
                                      "priceType": "REGULAR"
                                  },
                                  "Department": {
                                      "id": 94
                                  },
                                  "Offer": null,
                                  "SalesOfferingFeature": null,
                                  "Tax": null
                              },
                              "Payment": null,
                              "CustomerOrderLineLog": {
                                  "handKeyedBarCode": false,
                                  "qtyEntered": false,
                                  "repeatKey": false,
                                  "scannedItem": true,
                                  "exchangeItem": false,
                                  "voidItem": false,
                                  "packaged": false,
                                  "embeddedPrice": false,
                                  "keyedItem": false,
                                  "multiprice": false,
                                  "scanType": "UPC_A"
                              }
                          },
                          {
                              "id": null,
                              "entryTime": null,
                              "fulfillmentOrderId": null,
                              "lineNumber": 4,
                              "quantity": 1.565,
                              "uom": "KILOGRAM",
                              "NOF": false,
                              "subtotal": null,
                              "total": 1.92,
                              "BusinessUnit": null,
                              "Price": {
                                  "amount": 1.23,
                                  "currency": null,
                                  "priceType": "REGULAR"
                              },
                              "Offer": [],
                              "PriceOverride": null,
                              "Tax": [],
                              "SalesOffering": {
                                  "id": "0009460498",
                                  "upc": "0000000000000000040110",
                                  "name": "BANANAS",
                                  "receiptName": "BANANAS",
                                  "description": "BANANAS",
                                  "shortDescription": "BANANAS",
                                  "serialNumber": null,
                                  "authorizationNumber": null,
                                  "accountNumber": null,
                                  "virtualAccountNumber": null,
                                  "transactionType": null,
                                  "authorizationType": null,
                                  "authorizationStatus": null,
                                  "approved": false,
                                  "Price": {
                                      "amount": 1.23,
                                      "currency": null,
                                      "priceType": "REGULAR"
                                  },
                                  "Department": {
                                      "id": 94
                                  },
                                  "Offer": null,
                                  "SalesOfferingFeature": null,
                                  "Tax": null
                              },
                              "Payment": null,
                              "CustomerOrderLineLog": {
                                  "handKeyedBarCode": false,
                                  "qtyEntered": true,
                                  "repeatKey": false,
                                  "scannedItem": false,
                                  "exchangeItem": false,
                                  "voidItem": false,
                                  "packaged": false,
                                  "embeddedPrice": false,
                                  "keyedItem": true,
                                  "multiprice": false,
                                  "scanType": null
                              }
                          },
                          {
                              "id": null,
                              "entryTime": null,
                              "fulfillmentOrderId": null,
                              "lineNumber": 5,
                              "quantity": 1,
                              "uom": null,
                              "NOF": false,
                              "subtotal": null,
                              "total": 0.05,
                              "BusinessUnit": null,
                              "Price": {
                                  "amount": 0.05,
                                  "currency": null,
                                  "priceType": "REGULAR"
                              },
                              "Offer": [],
                              "PriceOverride": null,
                              "Tax": [
                                  {
                                      "category": "1",
                                      "taxrate": null,
                                      "description": "TAX 1",
                                      "taxAmount": null
                                  }
                              ],
                              "SalesOffering": {
                                  "id": "0009929159",
                                  "upc": "0000000000000000012340",
                                  "name": "PLASTIC BAG",
                                  "receiptName": "PLASTIC BAG",
                                  "description": "PLASTIC BAG FEE",
                                  "shortDescription": "PLASTIC BAG",
                                  "serialNumber": null,
                                  "authorizationNumber": null,
                                  "accountNumber": null,
                                  "virtualAccountNumber": null,
                                  "transactionType": null,
                                  "authorizationType": null,
                                  "authorizationStatus": null,
                                  "approved": false,
                                  "Price": {
                                      "amount": 0.05,
                                      "currency": null,
                                      "priceType": "REGULAR"
                                  },
                                  "Department": {
                                      "id": 89
                                  },
                                  "Offer": null,
                                  "SalesOfferingFeature": null,
                                  "Tax": null
                              },
                              "Payment": null,
                              "CustomerOrderLineLog": {
                                  "handKeyedBarCode": false,
                                  "qtyEntered": false,
                                  "repeatKey": false,
                                  "scannedItem": false,
                                  "exchangeItem": false,
                                  "voidItem": false,
                                  "packaged": false,
                                  "embeddedPrice": false,
                                  "keyedItem": true,
                                  "multiprice": false,
                                  "scanType": null
                              }
                          },
                          {
                              "id": null,
                              "entryTime": null,
                              "fulfillmentOrderId": null,
                              "lineNumber": 6,
                              "quantity": 1,
                              "uom": null,
                              "NOF": false,
                              "subtotal": null,
                              "total": 4.76,
                              "BusinessUnit": null,
                              "Price": {
                                  "amount": 4.76,
                                  "currency": null,
                                  "priceType": "REGULAR"
                              },
                              "Offer": [],
                              "PriceOverride": null,
                              "Tax": [
                                  {
                                      "category": "1",
                                      "taxrate": null,
                                      "description": "TAX 1",
                                      "taxAmount": null
                                  }
                              ],
                              "SalesOffering": {
                                  "id": "0030694880",
                                  "upc": "0000000000183164000280",
                                  "name": "TEARS EYE",
                                  "receiptName": "TEARS EYE",
                                  "description": "EQ ARTIFICIAL TEARS",
                                  "shortDescription": "TEARS EYE",
                                  "serialNumber": null,
                                  "authorizationNumber": null,
                                  "accountNumber": null,
                                  "virtualAccountNumber": null,
                                  "transactionType": null,
                                  "authorizationType": null,
                                  "authorizationStatus": null,
                                  "approved": false,
                                  "Price": {
                                      "amount": 4.76,
                                      "currency": null,
                                      "priceType": "REGULAR"
                                  },
                                  "Department": {
                                      "id": 40
                                  },
                                  "Offer": null,
                                  "SalesOfferingFeature": null,
                                  "Tax": null
                              },
                              "Payment": null,
                              "CustomerOrderLineLog": {
                                  "handKeyedBarCode": false,
                                  "qtyEntered": false,
                                  "repeatKey": false,
                                  "scannedItem": true,
                                  "exchangeItem": false,
                                  "voidItem": false,
                                  "packaged": false,
                                  "embeddedPrice": false,
                                  "keyedItem": false,
                                  "multiprice": false,
                                  "scanType": "UPC_A"
                              }
                          }
                      ]
                  },
                  "CustomerOrderReceipt": {
                      "id": null,
                      "date": null,
                      "templateType": null
                  },
                  "Log": {
                      "OrderLog": {
                          "scanCount": 6
                      }
                  }
              }
          },
          "links": [
              {
                  "rel": "sales_order",
                  "href": "https://apic.wal-mart.com/si/tecmdm/cthrealtime/orders/sales/CA/10965172533612600743?lookupVoid=false"
              }
          ]
      },
      "returns": []
  },
  "links": [
      {
          "rel": "self",
          "href": "https://apic.wal-mart.com/si/tecmdm/cthrealtime/orders/CA/10965172533612600743?lookupVoid=false"
      }
  ]
}