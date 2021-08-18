// 出版社ごとに価格とページ数の合計を算出
db.books.aggregate([{
    $group: {
        _id: "$publisher",
        cost: { $sum: "$price" },
        page: { $sum: "$pages" }
    }
}])


// 出版社ごとに100ページ当たりの価格を算出
db.books.aggregate([{
    $group: {
        _id: "$publisher",
        cost: { $sum: "$price" },
        page: { $sum: "$pages" }
    }
}, {
    $project: {
        _id: 1,
        cpp: { $multiply: [{ $divide: ["$cost", "$page"] }, 100] }
    }
}])