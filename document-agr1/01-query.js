// 書籍全体に対して平均価格と価格の標準偏差を導出
db.books.aggregate([{
    $group: {
        _id: 0,
        avg: {$avg: "$price"},
        stddev: { $stdDevPop: "$price"}
    }
}])

/*
{ "_id" : 0, "avg" : 480, "stddev" : 174.3553842013489 }
*/