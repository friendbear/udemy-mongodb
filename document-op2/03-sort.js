db.users.update(
    { name: "田中 剛" },
    {
        $push: {
            bookshelf: {
                $each: [],
                $sort: {
                    registerd: -1
                }
            }
        }
    }
)