// 取得データをタイトルと価格のみに絞り込んで、ソート
db.books.aggregate([
    {
        $project: {
            _id: 0,
            title: 1,
            price: 1
        }
    }, {
        $sort: { price: 1 }
    }
])

// 降順
db.books.aggregate([
    {
        $project: {
            _id: 0,
            title: 1,
            price: 1
        }
    }, {
        $sort: { price: -1 }
    }
])

/*
{ "title" : "父帰る", "price" : 799 }
{ "title" : "怪人二十面相", "price" : 702 }
{ "title" : "吾輩は猫である", "price" : 680 }
{ "title" : "少年探偵団", "price" : 670 }
{ "title" : "D坂の殺人事件", "price" : 648 }
{ "title" : "忠直卿行状記", "price" : 605 }
{ "title" : "十三夜", "price" : 562 }
{ "title" : "歌よみに与ふる書", "price" : 562 }
{ "title" : "歯車", "price" : 454 }
{ "title" : "或阿呆の一生", "price" : 432 }
{ "title" : "河童", "price" : 432 }
{ "title" : "みだれ髪", "price" : 432 }
{ "title" : "羅生門", "price" : 400 }
{ "title" : "門", "price" : 400 }
{ "title" : "にごりえ", "price" : 400 }
{ "title" : "たけくらべ", "price" : 400 }
{ "title" : "三四郎", "price" : 367 }
{ "title" : "蜘蛛の糸", "price" : 346 }
{ "title" : "坊っちゃん", "price" : 309 }
{ "title" : "わかれ道", "price" : 0 }
*/