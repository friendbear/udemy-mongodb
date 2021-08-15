// 最後の１件を削除

db.users.update(
    { name: "田中 剛" },
    {
        $pop: { bookshelf: 1 }
    }
)