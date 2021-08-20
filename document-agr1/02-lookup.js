
// 書籍 Aに対してレビューの中身を結合して取得
// (pipelinewを使う結合)
db.books.aggregate([{
    $match: { _id: ObjectId("5b6f03376c25c37f77e69177") }
}, {
    $lookup: {
        from: "reviews",
        let: { targets: "$reviews" },
        pipeline: [{
            $match: {
                $expr: {
                    $in: ["$_id", "$$targets"]
                }
            }
        }],
        as: "reviews"
    }
}]).pretty()

/*
{
        "_id" : ObjectId("5b6f03376c25c37f77e69177"),
        "title" : "D坂の殺人事件",
        "authors" : [
                "江戸川 乱歩"
        ],
        "type" : "文庫",
        "categories" : [
                "文学・評論",
                "ミステリー・サスペンス・ハードボイルド"
        ],
        "price" : 648,
        "pages" : 349,
        "publisher" : "角河書店",
        "launch" : ISODate("2016-03-24T15:00:00Z"),
        "reviews" : [
                {
                        "_id" : ObjectId("5b6a9a732ff9834cce647ffb"),
                        "user" : ObjectId("5b6a7aab2ff9834cce647fd4"),
                        "book" : ObjectId("5b6f03376c25c37f77e69177"),
                        "post" : ISODate("2018-02-10T03:00:00Z"),
                        "score" : 4,
                        "comment" : "「D坂の殺人事件」の「田中」の感想。"
                },
                {
                        "_id" : ObjectId("5b6f7ba86c25c37f77e69186"),
                        "user" : ObjectId("5b6a7d992ff9834cce647fd5"),
                        "book" : ObjectId("5b6f03376c25c37f77e69177"),
                        "post" : ISODate("2018-05-12T03:00:00Z"),
                        "score" : 3.2,
                        "comment" : "「D坂の殺人事件」の「鈴木」の感想。"
                }
        ]
}
*/