//書籍のレビュー件数が２件以上ついている場合ステータスに注目を設定、それ以外は
// 空文字を設定
db.books.aggregate([{
    $project: {
        _id: 0,
        title: 1,
        status: {
            $cond: {
                if: { $gte: [{ $size: "$reviews" }, 2] },
                then: "注目",
                else: ""
            }
        }
    }
}])
/*
{ "title" : "羅生門", "status" : "" }
{ "title" : "蜘蛛の糸", "status" : "" }
{ "title" : "或阿呆の一生", "status" : "" }
{ "title" : "河童", "status" : "" }
{ "title" : "歯車", "status" : "" }
{ "title" : "D坂の殺人事件", "status" : "注目" }
{ "title" : "怪人二十面相", "status" : "" }
{ "title" : "少年探偵団", "status" : "" }
{ "title" : "父帰る", "status" : "" }
{ "title" : "忠直卿行状記", "status" : "" }
{ "title" : "吾輩は猫である", "status" : "" }
{ "title" : "坊っちゃん", "status" : "" }
{ "title" : "三四郎", "status" : "" }
{ "title" : "門", "status" : "" }
{ "title" : "にごりえ", "status" : "" }
{ "title" : "たけくらべ", "status" : "" }
{ "title" : "十三夜", "status" : "" }
{ "title" : "わかれ道", "status" : "" }
{ "title" : "歌よみに与ふる書", "status" : "" }
{ "title" : "みだれ髪", "status" : "" }
*/