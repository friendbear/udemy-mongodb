db.books.find({
    publisher: { $regex: /社/g }
})

db.books.find({
    publisher: /社/g
})