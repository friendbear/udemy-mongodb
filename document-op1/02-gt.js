db.books.find({
    price: { $gt: 454 }
})

db.books.find({
    price: { $gte: 454 }
})

