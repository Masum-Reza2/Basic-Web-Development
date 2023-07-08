// inserting data in mongo db
use harrykart
db.items.insertOne({name:'Samsung 30s', price:22000, rating: 4.5, qty: 534, sold: 200})
// to see the stored items 
db.items.find()
// to insert multiple data in mongo db 
db.items.insertMany([{name:'Samsung 30s', price:22000, rating: 3.5, qty: 534, sold: 200},{name:'Nokia 30s', price:25000, rating: 4.5, qty: 534, sold: 500},{name:'Redmi 30s', price:12000, rating: 4.8, qty: 534, sold: 500},{name:'Realme 30s', price:114000, rating: 2.5, qty: 534, sold: 200}])