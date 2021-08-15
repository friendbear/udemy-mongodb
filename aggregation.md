
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