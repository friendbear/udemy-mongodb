// 出版社で重複排除
db.books.aggregate([{
    $group: {
        _id: "$publisher"
    }
}])