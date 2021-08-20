// 書籍のカテゴリ別に件数を取得
db.books.aggregate([{
    $unwind: "$categories"
}, {
    $group: {
        _id: "$categories",
        count:{$sum: 1}
    }
}])

/*
{ "_id" : "歌集", "count" : 1 }
{ "_id" : "推理小説", "count" : 2 }
{ "_id" : "日本文学", "count" : 14 }
{ "_id" : "ミステリー・サスペンス・ハードボイルド", "count" : 1 }
{ "_id" : "評論・文学研究", "count" : 1 }
{ "_id" : "文芸作品", "count" : 14 }
{ "_id" : "文学・評論", "count" : 15 }
{ "_id" : "演劇・舞台", "count" : 1 }
{ "_id" : "詩集", "count" : 1 }
{ "_id" : "戯曲・シナリオ", "count" : 1 }
*/