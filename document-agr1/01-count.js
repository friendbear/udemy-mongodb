db.books.aggregate([{
    $count: "count"
}])