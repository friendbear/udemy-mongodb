db.users.update(
    { name: "田中 剛" },
    {
        $push: {
            bookshelf: {
                $each: [],
                $slice: 5
            }
        }
    }
)