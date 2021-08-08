db.books.find({
    $or: [
        {publisher: "新朝社"},
        {publisher: "角河書店"}
    ]
})