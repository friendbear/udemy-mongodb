db.books.find({
    price: { $lt: 454 }
})

db.books.find({
    price: { $lte: 454 }
})