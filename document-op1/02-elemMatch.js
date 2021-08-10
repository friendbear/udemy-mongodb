//オブジェクトの配列
db.users.find({
    bookshelf: {
        $elemMatch: {
            status: "読了",
            readed: {$gte: ISODate("2018-02-01T00:00:00+09:00")}
        }
    }
}).pretty()


//オブジェクトの配列　ダブルクォーテーションでくくったうえでドットでつなぐ
db.users.find({
    "bookshelf.status": "読了"
})