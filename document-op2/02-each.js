db.users.update(
    { name: "田中 剛" },
    {
        $push: {
            bookshelf: {
                $each: [
                    {
                        book: "書籍２",
                        registerd: ISODate("2018-01-01T00:00:00+09:00")
                    }, {
                        book: "書籍３",
                        registerd: ISODate("2018-01-01T00:00:00+09:00")
                    }
                ]
            }
        }
    }
)