db.users.update(
    { name: "田中 剛" },
    {
        $push: {
            bookshelf: {
                $each: [{
                    book: "書籍@1",
                    registerd: ISODate()
                }, {
                    book: "書籍@2",
                    registerd: ISODate()
                }],
                $sort: {
                    registerd: -1
                },
                $slice: 5
            }
        }
    }
)