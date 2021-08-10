// カテゴリが３つの書籍
db.books.find({
  categories : { $size: 3 }
})