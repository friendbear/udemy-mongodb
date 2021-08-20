
db.books.aggregate([{
    $match: {
        _id: ObjectId("5b6f03376c25c37f77e69177")
    }
}, {
    $unwind: "$categories"
}])

/*
{
        "_id" : ObjectId("5b6f03376c25c37f77e69177"),
        "title" : "D坂の殺人事件",
        "authors" : [
                "江戸川 乱歩"
        ],
        "type" : "文庫",
        "categories" : "文学・評論",
        "price" : 648,
        "pages" : 349,
        "publisher" : "角河書店",
        "launch" : ISODate("2016-03-24T15:00:00Z"),
        "reviews" : [
                ObjectId("5b6a9a732ff9834cce647ffb"),
                ObjectId("5b6f7ba86c25c37f77e69186")
        ]
}
{
        "_id" : ObjectId("5b6f03376c25c37f77e69177"),
        "title" : "D坂の殺人事件",
        "authors" : [
                "江戸川 乱歩"
        ],
        "type" : "文庫",
        "categories" : "ミステリー・サスペンス・ハードボイルド",
        "price" : 648,
        "pages" : 349,
        "publisher" : "角河書店",
        "launch" : ISODate("2016-03-24T15:00:00Z"),
        "reviews" : [
                ObjectId("5b6a9a732ff9834cce647ffb"),
                ObjectId("5b6f7ba86c25c37f77e69186")
        ]
}
*/