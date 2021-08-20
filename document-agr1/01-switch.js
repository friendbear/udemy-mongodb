db.books.aggregate([{
    $project: {
        _id: 0,
        title: 1,
        status: {
            $switch: {
                branches: [
                    {case: {$gt: [{$size: "$reviews"}, 2]}, then: "A"},
                    {case: {$eq: [{$size: "$reviews"}, 2]}, then: "B"}
                ],
                default: "C"
            }
        }
    }
}])