db.authors.find({
    dob: { $type: "string" }
})