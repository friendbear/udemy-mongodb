db.users.update(
    { name: "田中 剛" },
    {
        $set: {
            "bookshelf.$[item].status": "読了",
            "bookshelf.$[item].readed": ISODate(),
        }
    },
    {
        arrayFilters: [
            { "item.book": ObjectId("5b6f033a6c25c37f77e6917e") }
        ]
    }
)