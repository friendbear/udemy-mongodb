db.books.aggregate([{
    $match: { publisher: "講話社" }
},
{ $count: "count" }
])