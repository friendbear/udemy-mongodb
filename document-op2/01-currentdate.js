db.users.update(
    {
        name: "田中 剛"
    },
    {
        $set: { password: "hoge " },
        $currentDate: { updated: true }
    }
)