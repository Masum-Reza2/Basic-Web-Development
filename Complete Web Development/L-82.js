// Searching for data in mongo db 
use Harrykart

// This query will return all the objects with rating equal to 4.5
db.items.find({rating:4.5})

// This query will return all the objects with rating equal and getter than 3.5
db.items.find({rating: {$gte: 3.5}})

// This query will return all the objects with rating getter than 3.5 but not equal 3.5
db.items.find({rating: {$gt: 3.5}})

// And operator/multiple query avobe formula's unbreakable
db.items.find({rating: {$gt: 3.5}, price: {$gt: 10000}})

db.items.find({rating: {$lt: 3.5}, price: {$gt: 114000}})

// or query/ option query 
db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})



db.items.find({rating: {$gt: 3.5}}, {rating: 1})