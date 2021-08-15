// パブリッシャーが講話社で絞込
db.books.aggregate([
    { $match: {
        publisher: "講話社"
    }}
])

// パブリッシャーが講話社でない絞込
db.books.aggregate([
    { $match: {
        publisher: { $ne: "講話社" }
    }}
])