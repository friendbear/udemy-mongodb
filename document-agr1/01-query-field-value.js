// 著者の名前をスペースで文字列分割
db.authors.aggregate([{
    $project: {
        _id: 0,
        name: { $split: ["$name", " "] }
    }
}])

/*
{ "name" : [ "芥川", "龍之介" ] }
{ "name" : [ "江戸川", "乱歩" ] }
{ "name" : [ "菊池", "寛" ] }
{ "name" : [ "夏目", "漱石" ] }
{ "name" : [ "樋口", "一葉" ] }
{ "name" : [ "正岡", "子規" ] }
{ "name" : [ "与謝野", "晶子" ] }
*/

// 書籍のタイトルをタイトル（出版社）のような表記で取得
db.books.aggregate([{
    $project: {
        _id: 0,
        title: { $concat: [ "$title", "（", "$publisher", "）"]}
    }
}])

/*

MongoDB Enterprise > db.books.aggregate([{
...     $project: {
...         _id: 0,
...         title: { $concat: [ "$title", "（", "$publisher", "）"]}
...     }
... }])
{ "title" : "羅生門（新朝社）" }
{ "title" : "蜘蛛の糸（新朝社）" }
{ "title" : "或阿呆の一生（新朝社）" }
{ "title" : "河童（新朝社）" }
{ "title" : "歯車（筑紫書房）" }
{ "title" : "D坂の殺人事件（角河書店）" }
{ "title" : "怪人二十面相（講話社）" }
{ "title" : "少年探偵団（講話社）" }
{ "title" : "父帰る（筑紫書房）" }
{ "title" : "忠直卿行状記（筑紫書房）" }
{ "title" : "吾輩は猫である（新朝社）" }
{ "title" : "坊っちゃん（新朝社）" }
{ "title" : "三四郎（新朝社）" }
{ "title" : "門（新朝社）" }
{ "title" : "にごりえ（新朝社）" }
{ "title" : "たけくらべ（新朝社）" }
{ "title" : "十三夜（筑紫書房）" }
{ "title" : "わかれ道（新朝社）" }
{ "title" : "歌よみに与ふる書（筑紫書房）" }
{ "title" : "みだれ髪（角河書店）" }
*/