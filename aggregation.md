
アグリゲーション
##

アグリゲーションの基本的な記法
* 前置記法
* 配列表記
```
db."COLLECTION".aggregate([
    { "STAGE": {"OPERATOR": ["ARGS] } }
])
```


検索クエリの基本的な記法
* 中置表記
* オブジェクト表記

ステージ & オペレータ
###

```
aggregate([
    [ {$mutch}, {$group}, {$sort} ]
])
```

ステージの種類
####

* $mutch
* $project
* $sort
* $count
* $group
* $skip
* $limit
* $lookup
* $unwind

オペレータの種類
####


ドキュメントの絞り込み
###
* `$match`


再フォーマット
###
* `$project`


検索結果ソート
###
* `$sort`


検索結果件数取得
###
* `$count`


グループごとにデータ件数を集計
###
* `$group`

```js
db."COLLECTION".aggregate([{
    $group: {
        _id: "CONDITION",
        "FIELD1": { "ACCUMULATOR1": "EXPRESSION1" },
        ...
    }
}])
```

$sumオペレータ
####

ACCUMULATOR: $sum


グループごとにデータ合計値を集計
####

オペレータ
* `$sum` 加算
* `$add` 足し算
* `$substract` 引き算
* `$multiply` 掛け算
* `$divide` 割り算

グループごとに最小値／最大値を集計
####

オペレータ
* `$min`
* `$max`

グループ化条件で以下のように指定すると年月日で集計できる
```json
_id: {
    year: {$year: "$date"},
    month: {$month: "$date"},
    day: {$dayOfMonth: "$date"}
}
```

グループごとに平均／分散を集計
####

_id: 0 を設定すると全体をグループ化

オペレータ
* `$avg`
* `$stdDevPop`


指定した範囲を取得
####

ステージ
* `$limit`
* `$skip`

オペレータ


なし


検索結果フィールド名を変更
####

* `$project`


検索結果のフィールド値を変更
####

ステージなし

オペレータ
* `$split: ["derimita", ]`
* `$concat: ["$a", "$b", ]`


検索結果を条件に応じて表記変更
####

ステージなし


オペレーター
* `$cond`
* `$switch case then default`


コレクションの結合
####

ステージ
* `$lookup`

```json
$lookup: {
    from: "",
    localField: "",
    foreignField: "",
    as: ""
}
```

```json
$lookup: {
    from: "",
    let: {},
    pipeline: [],
    as: ""
}
```
