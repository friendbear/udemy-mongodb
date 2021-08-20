// 書籍 Aに対してレビューの中身を結合して取得
// (pipelinewを使わない結合)
db.books.aggregate([{
    $match: { _id: ObjectId("5b6f03376c25c37f77e69177") }
}, {
    $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "book",
        as: "reviews"
    }
}]).pretty()