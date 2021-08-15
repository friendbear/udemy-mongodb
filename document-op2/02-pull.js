// ステータス読了を削除

db.users.update(
    { name: "田中 剛" },
    {
        $pull: { bookshelf: { status: "読了" } }
    }
)