db.users.update(
    { name: "田中 剛" },
    {
        $push: {
            bookshelf:{
                book: "書籍１",
                registerd: ISODate()
            }
        }
    }
)