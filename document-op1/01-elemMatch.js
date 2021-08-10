db.books.find({
    categories: {
        $elemMatch: { $eq: "日本文学" }
    }
})

db.books.find({
    categories: "日本文学"
})