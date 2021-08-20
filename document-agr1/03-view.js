db.createView(
    "categories",
    "books",
    [{
        $unwind: "$categories"
    }, {
        $group: {
            _id: "$categories",
            count: { $sum: 1 },
            books: { $push: "$$ROOT"}
        }
    }, {
        $project: {
            _id: 0,
            categories: "$_id",
            count: 1,
            books: 1
        }
    }]
)