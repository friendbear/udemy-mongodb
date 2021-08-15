// 500円より高い書籍
db.books.aggregate([
    { $match: {
        price: { $gt: 500 }
    }}
])

// 500円より安い書籍
db.books.aggregate([
    { $match: {
        price: { $lt: 500 }
    }}
])