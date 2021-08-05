db.books.find({
    $and: [
        { publisher: "新朝社" },
        { price: { $gt: 300 } }
    ]
})
