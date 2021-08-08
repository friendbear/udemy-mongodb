db.books.find({
    price: { $not: { $gt: 500}}
})