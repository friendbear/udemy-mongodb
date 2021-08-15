db.books.aggregate([
    { $match: {
        publisher: { $regex: /社/g }
    }}
])