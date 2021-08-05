db.books.find({
    publisher: { $eq: "講話社"}
})

db.books.find({
    publisher: { $ne: "講話社"}
})
