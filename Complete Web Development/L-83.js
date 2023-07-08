// Deleting data from the mongo db 
show dbs
use sopnakart
show collections
db.items.find()

// normal deleting
db.items.deleteOne({})//it will delete items serially 1 by 1
db.items.deleteMany({})//it will delete all items at a single time

// deleting particular item like applying quering formula
db.items.deleteOne({name:'Samsung 30s'})
//we can delete multiple items smartly using query formula
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
