// 出版社が講話社の書籍を取得し、出力を整形する
db.books.aggregate([
    { $match: { publisher: "講話社" } },
    {
        $project: {
            _id: 0
        }
    }
])

// titleのみ
// 出版社が講話社の書籍を取得し、出力を整形する
db.books.aggregate([
    { $match: { publisher: "講話社" } },
    {
        $project: {
            _id: 0,
            title: 1
        }
    }
])

// _idとtitle以外を表示
db.books.aggregate([
    { $match: { publisher: "講話社" } },
    {
        $project: {
            _id: 0,
            title: 0
        }
    }
])
