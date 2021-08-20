
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


配列フィールドの展開
####


ステージ
* `$unwind`

オペレータ
* `$push`


ビューの作成
###
`db.createView("VIEW_NAME", "SOURCE", "PIPELINE")`

$$ROOT
####
アグリゲーションパイプラインで現在処理しているステージのトップレベルドキュメント

$$CURRENT
####
アグリゲーションパイプラインで現在処理しているステージの処理中ドキュメント


まとめ
###
```
■アグリゲーションパイプライン

    db.<COLLECTION>.aggregate([ <STAGE1>, ... ])


■ステージ

    絞込

        db.<COLLECTION>.aggregate([{
          $match: { <EXPRESSION> }
        }])

    再フォーマット

        db.<COLLECTION>.aggregate([{
          $project: { <FIELD>: <1 | 0>, ... }
        }])

    ※1: 表示、 0: 非表示

    ソート

        db.<COLLECTION>.aggregate([{
          $sort: { <FIELD>: <1 | -1>, ... }
        }])

    ※1: 昇順、 -1: 降順

    件数取得

        db.<COLLECTION>.aggregate([{
          $count: "<FIELD>"
        }])

    グループ化

        db.<COLLECTION>.aggregate([{
          $group: {
            _id: <CONDITION (*) >,
            <FIELD1>: { <ACCUMULATOR1>: <EXPRESSION1> }, ...
          }
        }])

    (*) 設定例

        単純にフィールドでグループ化する場合    

            _id: "$<FIELD>"

        年月日でグループ化する場合    

            _id: {
                  year:  {$year: "$date"},
                  month: {$month: "$date"},
                  day:   {$dayOfMonth: "$date"}
                }

        全体に対して集計する場合    

            _id: 0

    スキップ

        db.<COLLECTION>.aggregate([{
          $skip: <NUMBER>
        }])

    リミット

        db.<COLLECTION>.aggregate([{
          $limit: <NUMBER>
        }])

    コレクションの外部結合

        db.<SOURCE_COLLECTION>.aggregate([{
          $lookup: {
            from: <TARGET_COLLECTION>,
            localField: <SOURCE_FIELD>,
            foreignField: <TARGET_FIELD>,
            as: <OUT_FIELD>
          }
        }])

        db.<SOURCE_COLLECTION>.aggregate([{
          $lookup: {
            from: <TARGET_COLLECTION>,
            let: {<VAR1>: <SOURCE_FIELD1>, ...},
            pipeline: [<EXPRESSION>, ...],
            as: <OUT_FIELD>
          }
        }])

    配列展開

        db.<COLLECTION>.aggregate([{
          $unwind: "<FIELD>"
        }])


■オペレーター

    加算

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$add: [<VALUE1>, ... ]}, ...
          }
        }])

    減算

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$subtract: [<VALUE1>, <VALUE2>]}, ...
          }
        }])

    乗算

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$multiply: [<VALUE1>, ... ]}, ...
          }
        }])

    除算

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$divide: [<VALUE1>, <VALUE2>]}, ...
          }
        }])

    合計

        db.<COLLECTION>.aggregate([{
          $group: {
            _id: <CONDITION>,
            <FIELD1>: { $sum: <EXPRESSION1> }, ...
          }
        }])

    最小値

        db.<COLLECTION>.aggregate([{
          $group: {
            _id: <CONDITION>,
            <TRG_FIELD>: { $min: "$<SRC_FIELD>" }, ...
          }
        }])

    最大値

        db.<COLLECTION>.aggregate([{
          $group: {
            _id: <CONDITION>,
            <TRG_FIELD>: { $max: "$<SRC_FIELD>" }, ...
          }
        }])

    配列追加

        db.<COLLECTION>.aggregate([{
          $group: {
            _id: <CONDITION>,
            <FIELD>: { $push: <EXPRESSION> }, ...
          }
        }])

    文字列分割

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$split: [<TEXT>, <DELIMITER>]}, ...
          }
        }])

    文字列結合

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$concat: [<EXPRESSION1>, ...]}, ...
          }
        }])

    if文

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$cond: {
              if: <EXPRESSION>, then: <TRUE_CASE>, else: <FALSE_CASE>
            }}, ...
          }
        }])

    switch文

        db.<COLLECTION>.aggregate([{
          <STAGE>: {
            <FIELD>: {$switch: {
              branches: [{
                case: <EXPRESSION1>, then: <CASE1>
              }, ...],
              default: <EXPRESSIONx>
            }}, ...
          }
        }])


■ビュー作成

    db.createView(<NAME>, <SOURCE>, <PIPELINE>)
```