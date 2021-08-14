db.users.update(
    { name: "田中 剛" },
    {
        $push: {
            bookshelf: {
                $each: [{

                    book: "書籍Position1",
                    registerd: ISODate()

                }],
                $position: 0
            },
        }
    }
)