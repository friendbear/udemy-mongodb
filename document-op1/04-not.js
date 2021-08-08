db.books.find({
    publisher: { $not: /新朝社/ }
})