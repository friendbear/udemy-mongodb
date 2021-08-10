// カテゴリが１件より多く登録されている書籍
// aggrigation opr
db.books.find({
    $expr: {
        $gt: [{ size: "categories" }, 1]  // sizeに$ を付けるとエラーになる
    }
}).pretty()