
// 出版社ごとに価格の最大値、最小値を求める
db.books.aggregate([{
    $group: {
        _id: "$publisher",
        min: { $min: "$price" },
        max: { $max: "$price" }
    }
}])

// 出版年月ごとに書籍の最高価格、最低価格を産出
db.books.aggregate([{
    $group: {
        _id: {
            year: { $year: "$launch" },
            month: { $month: "$launch"}
        },
        min: { $min: "$price" },
        max: { $max: "$price" }
    }
}])

/*
{ "_id" : { "year" : 1979, "month" : 8 }, "min" : 454, "max" : 454 }
{ "_id" : { "year" : 2002, "month" : 12 }, "min" : 400, "max" : 400 }
{ "_id" : { "year" : 1983, "month" : 3 }, "min" : 562, "max" : 562 }
{ "_id" : { "year" : 1968, "month" : 11 }, "min" : 346, "max" : 346 }
{ "_id" : { "year" : 1979, "month" : 1 }, "min" : 562, "max" : 562 }
{ "_id" : { "year" : 2013, "month" : 5 }, "min" : 702, "max" : 702 }
{ "_id" : { "year" : 1962, "month" : 11 }, "min" : 0, "max" : 0 }
{ "_id" : { "year" : 2016, "month" : 1 }, "min" : 670, "max" : 670 }
{ "_id" : { "year" : 2017, "month" : 6 }, "min" : 432, "max" : 432 }
{ "_id" : { "year" : 1968, "month" : 12 }, "min" : 432, "max" : 432 }
{ "_id" : { "year" : 2016, "month" : 3 }, "min" : 648, "max" : 648 }
{ "_id" : { "year" : 2003, "month" : 5 }, "min" : 680, "max" : 680 }
{ "_id" : { "year" : 1986, "month" : 11 }, "min" : 400, "max" : 400 }
{ "_id" : { "year" : 1948, "month" : 10 }, "min" : 367, "max" : 367 }
{ "_id" : { "year" : 1970, "month" : 11 }, "min" : 605, "max" : 605 }
{ "_id" : { "year" : 2016, "month" : 10 }, "min" : 799, "max" : 799 }
{ "_id" : { "year" : 2005, "month" : 9 }, "min" : 400, "max" : 400 }
{ "_id" : { "year" : 2003, "month" : 3 }, "min" : 309, "max" : 309 }
*/

// 出版社、出版年月ごとに書籍の最高価格、最低価格を産出
// 出版年月が新しい順に並び変え
db.books.aggregate([{
    $group: {
        _id: ["$publisher", {
            
            year: { $year: "$launch" },
            month: { $month: "$launch"}
        }],
        min: { $min: "$price" },
        max: { $max: "$price" }
    }
}, {
    $sort: { _id: -1 }
}])

/*
{ "_id" : [ "講話社", { "year" : 2016, "month" : 1 } ], "min" : 670, "max" : 670 }
{ "_id" : [ "講話社", { "year" : 2013, "month" : 5 } ], "min" : 702, "max" : 702 }
{ "_id" : [ "角河書店", { "year" : 2017, "month" : 6 } ], "min" : 432, "max" : 432 }
{ "_id" : [ "角河書店", { "year" : 2016, "month" : 3 } ], "min" : 648, "max" : 648 }
{ "_id" : [ "筑紫書房", { "year" : 2016, "month" : 10 } ], "min" : 799, "max" : 799 }
{ "_id" : [ "筑紫書房", { "year" : 1983, "month" : 3 } ], "min" : 562, "max" : 562 }
{ "_id" : [ "筑紫書房", { "year" : 1979, "month" : 8 } ], "min" : 454, "max" : 454 }
{ "_id" : [ "筑紫書房", { "year" : 1979, "month" : 1 } ], "min" : 562, "max" : 562 }
{ "_id" : [ "筑紫書房", { "year" : 1970, "month" : 11 } ], "min" : 605, "max" : 605 }
{ "_id" : [ "新朝社", { "year" : 2005, "month" : 9 } ], "min" : 400, "max" : 400 }
{ "_id" : [ "新朝社", { "year" : 2003, "month" : 5 } ], "min" : 680, "max" : 680 }
{ "_id" : [ "新朝社", { "year" : 2003, "month" : 3 } ], "min" : 309, "max" : 309 }
{ "_id" : [ "新朝社", { "year" : 2002, "month" : 12 } ], "min" : 400, "max" : 400 }
{ "_id" : [ "新朝社", { "year" : 1986, "month" : 11 } ], "min" : 400, "max" : 400 }
{ "_id" : [ "新朝社", { "year" : 1968, "month" : 12 } ], "min" : 432, "max" : 432 }
{ "_id" : [ "新朝社", { "year" : 1968, "month" : 11 } ], "min" : 346, "max" : 346 }
{ "_id" : [ "新朝社", { "year" : 1962, "month" : 11 } ], "min" : 0, "max" : 0 }
{ "_id" : [ "新朝社", { "year" : 1948, "month" : 10 } ], "min" : 367, "max" : 367 }
*/