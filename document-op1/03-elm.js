db.authors.find({
    $and: [
        { dob: { $exists: true } },
        { dbb: { $not: { $type: "date" } } },
    ]
})