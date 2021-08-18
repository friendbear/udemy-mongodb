// 書籍の出版日の降順でソート
db.books.aggregate([{
    $sort: { launch: -1 }
}, {
    $project: {
        _id: 0,
        title: 1,
        launch: 1
    }
}])

/*
{ "title" : "みだれ髪", "launch" : ISODate("2017-06-16T15:00:00Z") }
{ "title" : "父帰る", "launch" : ISODate("2016-10-18T15:00:00Z") }
{ "title" : "D坂の殺人事件", "launch" : ISODate("2016-03-24T15:00:00Z") }
{ "title" : "少年探偵団", "launch" : ISODate("2016-01-13T15:00:00Z") }
{ "title" : "怪人二十面相", "launch" : ISODate("2013-05-09T15:00:00Z") }
{ "title" : "羅生門", "launch" : ISODate("2005-09-30T15:00:00Z") }
{ "title" : "吾輩は猫である", "launch" : ISODate("2003-05-31T15:00:00Z") }
{ "title" : "坊っちゃん", "launch" : ISODate("2003-03-31T15:00:00Z") }
{ "title" : "にごりえ", "launch" : ISODate("2002-12-31T15:00:00Z") }
{ "title" : "たけくらべ", "launch" : ISODate("2002-12-31T15:00:00Z") }
{ "title" : "門", "launch" : ISODate("1986-11-28T15:00:00Z") }
{ "title" : "歌よみに与ふる書", "launch" : ISODate("1983-03-15T15:00:00Z") }
{ "title" : "歯車", "launch" : ISODate("1979-08-13T15:00:00Z") }
{ "title" : "十三夜", "launch" : ISODate("1979-01-31T15:00:00Z") }
{ "title" : "忠直卿行状記", "launch" : ISODate("1970-11-30T15:00:00Z") }
{ "title" : "或阿呆の一生", "launch" : ISODate("1968-12-14T15:00:00Z") }
{ "title" : "河童", "launch" : ISODate("1968-12-14T15:00:00Z") }
{ "title" : "蜘蛛の糸", "launch" : ISODate("1968-11-18T15:00:00Z") }
{ "title" : "わかれ道", "launch" : ISODate("1962-11-18T15:00:00Z") }
{ "title" : "三四郎", "launch" : ISODate("1948-10-26T15:00:00Z") }
*/

db.books.aggregate([{
    $sort: { launch: -1 }
}, {
    $project: {
        _id: 0,
        title: 1,
        launch: 1
    }
}, {
    $skip: 2
}])

// 書籍の出版日の降順でソートし、タイトルと出版日の３件目から３件だけ抽出
db.books.aggregate([{
    $sort: { launch: -1 }
}, {
    $project: {
        _id: 0,
        title: 1,
        launch: 1
    }
}, {
    $skip: 2
}, {
    $limit: 3
}])
