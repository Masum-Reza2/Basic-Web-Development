// Updating data from the mongo database
// CRUD stands for Creat Read Update Delete 

>mongo
>show dbs
>use Harrykart
>show collections

// To add a new collection 
>db.anotherCollcetion.insertOne({a: 89})

// Updating of a database
db.items.insertOne({})
db.items.insertMany([{},{},{}])
// this is how we can insert data into a database

// Now to update any element inside it.
db.items.updateOne({name: 'Nokia 30s'}, {$set: {price: 2}})
db.items.updateMany({rating: {$gte:3.5}}, {$set:{price:5}})
// Here first argument for query and second argument to set or update the data and we can apply query formula for smart updating.
db.items.updateMany({rating: {$gte:3.5}}, {$set:{price:5, rating:1}})//we can update multiple elements