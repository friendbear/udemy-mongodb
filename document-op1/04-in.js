db.books.find({
    publisher: { $in: ["講話社", "角河書店"] }
})