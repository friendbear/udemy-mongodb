db.books.aggregate([{
    $group: {
        _id: "$publisher",
        count: { $sum: 1 }
    }
}])

/*
{ "_id" : "新朝社", "count" : 11 }
{ "_id" : "筑紫書房", "count" : 5 }
{ "_id" : "角河書店", "count" : 2 }
{ "_id" : "講話社", "count" : 2 }
*/
db.books.aggregate([{
    $group: {
        _id: "$publisher",
        count: { $sum: 1 }
    }
}, {
    $project: {
        _id: 0,
        publisher: "$_id",
        count: 1
    }
}])

/*
{ "count" : 11, "publisher" : "新朝社" }
{ "count" : 5, "publisher" : "筑紫書房" }
{ "count" : 2, "publisher" : "角河書店" }
{ "count" : 2, "publisher" : "講話社" }
*/