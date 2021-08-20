// 書籍のカテゴリ別に件数及び書籍一覧を取得
db.books.aggregate([{
    $unwind: "$categories"
}, {
    $group: {
        _id: "$categories",
        count: { $sum: 1 },
        books: { $push: "$$ROOT"}
    }
}]).pretty()

/*
{
        "_id" : "歌集",
        "count" : 1,   
        "books" : [
                {
                        "_id" : ObjectId("5b6f033e6c25c37f77e69185"),
                        "title" : "みだれ髪",
                        "authors" : [
                                "与謝野 晶子"
                        ],
                        "type" : "文庫",
                        "categories" : "歌集",
                        "price" : 432,
                        "pages" : 208,
                        "publisher" : "角河書店",
                        "launch" : ISODate("2017-06-16T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "推理小説",
        "count" : 2,
        "books" : [
                {
                        "_id" : ObjectId("5b6f03386c25c37f77e69178"),
                        "title" : "怪人二十面相",
                        "authors" : [
                                "江戸川 乱歩"
                        ],
                        "type" : "文庫",
                        "categories" : "推理小説",
                        "price" : 702,
                        "pages" : 256,
                        "publisher" : "講話社",
                        "launch" : ISODate("2013-05-09T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6f7ba96c25c37f77e69187")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f03386c25c37f77e69179"),
                        "title" : "少年探偵団",
                        "authors" : [
                                "江戸川 乱歩"
                        ],
                        "type" : "文庫",
                        "categories" : "推理小説",
                        "price" : 670,
                        "pages" : 224,
                        "publisher" : "講話社",
                        "launch" : ISODate("2016-01-13T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "日本文学",
        "count" : 14,
        "books" : [
                {
                        "_id" : ObjectId("5b6f03356c25c37f77e69172"),
                        "title" : "羅生門",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 400,
                        "pages" : 301,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2005-09-30T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6a9a742ff9834cce647ffc")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f03356c25c37f77e69173"),
                        "title" : "蜘蛛の糸",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 346,
                        "pages" : 128,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1968-11-18T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03366c25c37f77e69174"),
                        "title" : "或阿呆の一生",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 432,
                        "pages" : 249,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1968-12-14T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03366c25c37f77e69175"),
                        "title" : "河童",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 432,
                        "pages" : 249,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1968-12-14T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03376c25c37f77e69176"),
                        "title" : "歯車",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 454,
                        "pages" : 127,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1979-08-13T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03396c25c37f77e6917b"),
                        "title" : "忠直卿行状記",
                        "authors" : [
                                "菊池 寛"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 605,
                        "pages" : 223,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1970-11-30T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917c"),
                        "title" : "吾輩は猫である",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 680,
                        "pages" : 610,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2003-05-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917d"),
                        "title" : "坊っちゃん",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 309,
                        "pages" : 216,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2003-03-31T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6a9a732ff9834cce647ffa")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917e"),
                        "title" : "三四郎",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 367,
                        "pages" : 354,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1948-10-26T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033b6c25c37f77e6917f"),
                        "title" : "門",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 400,
                        "pages" : 231,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1986-11-28T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033b6c25c37f77e69180"),
                        "title" : "にごりえ",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 400,
                        "pages" : 287,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2002-12-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033c6c25c37f77e69181"),
                        "title" : "たけくらべ",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 400,
                        "pages" : 287,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2002-12-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033c6c25c37f77e69182"),
                        "title" : "十三夜",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "日本文学",
                        "price" : 562,
                        "pages" : 180,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1979-01-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033d6c25c37f77e69183"),
                        "title" : "わかれ道",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "電子",
                        "categories" : "日本文学",
                        "price" : 0,
                        "pages" : 8,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1962-11-18T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "ミステリー・サスペンス・ハードボイルド",
        "count" : 1,
        "books" : [
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
        ]
}
{
        "_id" : "評論・文学研究",
        "count" : 1,
        "books" : [
                {
                        "_id" : ObjectId("5b6f033d6c25c37f77e69184"),
                        "title" : "歌よみに与ふる書",
                        "authors" : [
                                "正岡 子規"
                        ],
                        "type" : "文庫",
                        "categories" : "評論・文学研究",
                        "price" : 562,
                        "pages" : 180,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1983-03-15T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "文芸作品",
        "count" : 14,
        "books" : [
                {
                        "_id" : ObjectId("5b6f03356c25c37f77e69172"),
                        "title" : "羅生門",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 400,
                        "pages" : 301,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2005-09-30T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6a9a742ff9834cce647ffc")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f03356c25c37f77e69173"),
                        "title" : "蜘蛛の糸",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 346,
                        "pages" : 128,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1968-11-18T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03366c25c37f77e69174"),
                        "title" : "或阿呆の一生",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 432,
                        "pages" : 249,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1968-12-14T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03366c25c37f77e69175"),
                        "title" : "河童",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 432,
                        "pages" : 249,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1968-12-14T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03376c25c37f77e69176"),
                        "title" : "歯車",
                        "authors" : [
                                "芥川 龍之介"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 454,
                        "pages" : 127,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1979-08-13T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03396c25c37f77e6917b"),
                        "title" : "忠直卿行状記",
                        "authors" : [
                                "菊池 寛"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 605,
                        "pages" : 223,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1970-11-30T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917c"),
                        "title" : "吾輩は猫である",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 680,
                        "pages" : 610,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2003-05-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917d"),
                        "title" : "坊っちゃん",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 309,
                        "pages" : 216,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2003-03-31T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6a9a732ff9834cce647ffa")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917e"),
                        "title" : "三四郎",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 367,
                        "pages" : 354,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1948-10-26T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033b6c25c37f77e6917f"),
                        "title" : "門",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 400,
                        "pages" : 231,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1986-11-28T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033b6c25c37f77e69180"),
                        "title" : "にごりえ",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 400,
                        "pages" : 287,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2002-12-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033c6c25c37f77e69181"),
                        "title" : "たけくらべ",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 400,
                        "pages" : 287,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2002-12-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033c6c25c37f77e69182"),
                        "title" : "十三夜",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "文芸作品",
                        "price" : 562,
                        "pages" : 180,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1979-01-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033d6c25c37f77e69183"),
                        "title" : "わかれ道",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "電子",
                        "categories" : "文芸作品",
                        "price" : 0,
                        "pages" : 8,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1962-11-18T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "文学・評論",
        "count" : 15,
        "books" : [
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
                },
                {
                        "_id" : ObjectId("5b6f03386c25c37f77e69178"),
                        "title" : "怪人二十面相",
                        "authors" : [
                                "江戸川 乱歩"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 702,
                        "pages" : 256,
                        "publisher" : "講話社",
                        "launch" : ISODate("2013-05-09T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6f7ba96c25c37f77e69187")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f03386c25c37f77e69179"),
                        "title" : "少年探偵団",
                        "authors" : [
                                "江戸川 乱歩"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 670,
                        "pages" : 224,
                        "publisher" : "講話社",
                        "launch" : ISODate("2016-01-13T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03396c25c37f77e6917a"),
                        "title" : "父帰る",
                        "authors" : [
                                "菊池 寛"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 799,
                        "pages" : 336,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("2016-10-18T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f03396c25c37f77e6917b"),
                        "title" : "忠直卿行状記",
                        "authors" : [
                                "菊池 寛"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 605,
                        "pages" : 223,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1970-11-30T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917c"),
                        "title" : "吾輩は猫である",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 680,
                        "pages" : 610,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2003-05-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917d"),
                        "title" : "坊っちゃん",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 309,
                        "pages" : 216,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2003-03-31T15:00:00Z"),
                        "reviews" : [
                                ObjectId("5b6a9a732ff9834cce647ffa")
                        ]
                },
                {
                        "_id" : ObjectId("5b6f033a6c25c37f77e6917e"),
                        "title" : "三四郎",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 367,
                        "pages" : 354,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1948-10-26T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033b6c25c37f77e6917f"),
                        "title" : "門",
                        "authors" : [
                                "夏目 漱石"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 400,
                        "pages" : 231,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1986-11-28T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033b6c25c37f77e69180"),
                        "title" : "にごりえ",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 400,
                        "pages" : 287,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2002-12-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033c6c25c37f77e69181"),
                        "title" : "たけくらべ",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 400,
                        "pages" : 287,
                        "publisher" : "新朝社",
                        "launch" : ISODate("2002-12-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033c6c25c37f77e69182"),
                        "title" : "十三夜",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 562,
                        "pages" : 180,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1979-01-31T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033d6c25c37f77e69183"),
                        "title" : "わかれ道",
                        "authors" : [
                                "樋口 一葉"
                        ],
                        "type" : "電子",
                        "categories" : "文学・評論",
                        "price" : 0,
                        "pages" : 8,
                        "publisher" : "新朝社",
                        "launch" : ISODate("1962-11-18T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033d6c25c37f77e69184"),
                        "title" : "歌よみに与ふる書",
                        "authors" : [
                                "正岡 子規"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 562,
                        "pages" : 180,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1983-03-15T15:00:00Z"),
                        "reviews" : [ ]
                },
                {
                        "_id" : ObjectId("5b6f033e6c25c37f77e69185"),
                        "title" : "みだれ髪",
                        "authors" : [
                                "与謝野 晶子"
                        ],
                        "type" : "文庫",
                        "categories" : "文学・評論",
                        "price" : 432,
                        "pages" : 208,
                        "publisher" : "角河書店",
                        "launch" : ISODate("2017-06-16T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "演劇・舞台",
        "count" : 1,
        "books" : [
                {
                        "_id" : ObjectId("5b6f03396c25c37f77e6917a"),
                        "title" : "父帰る",
                        "authors" : [
                                "菊池 寛"
                        ],
                        "type" : "文庫",
                        "categories" : "演劇・舞台",
                        "price" : 799,
                        "pages" : 336,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("2016-10-18T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "詩集",
        "count" : 1,
        "books" : [
                {
                        "_id" : ObjectId("5b6f033d6c25c37f77e69184"),
                        "title" : "歌よみに与ふる書",
                        "authors" : [
                                "正岡 子規"
                        ],
                        "type" : "文庫",
                        "categories" : "詩集",
                        "price" : 562,
                        "pages" : 180,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("1983-03-15T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
{
        "_id" : "戯曲・シナリオ",
        "count" : 1,
        "books" : [
                {
                        "_id" : ObjectId("5b6f03396c25c37f77e6917a"),
                        "title" : "父帰る",
                        "authors" : [
                                "菊池 寛"
                        ],
                        "type" : "文庫",
                        "categories" : "戯曲・シナリオ",
                        "price" : 799,
                        "pages" : 336,
                        "publisher" : "筑紫書房",
                        "launch" : ISODate("2016-10-18T15:00:00Z"),
                        "reviews" : [ ]
                }
        ]
}
*/