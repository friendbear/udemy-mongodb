db.authors.find({
    dob: { $exists: true }
})
