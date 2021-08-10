

db.authors.update(
    { name: "正岡 子規" },
    {
        $set:
            { dob: ISODate("1867-10-14T00:00:00+09:00") }
    }
)

db.authors.update(
    { name: "正岡 子規" },
    {
        $set:
            { dob: null }
    }
)

db.authors.update(
    { name: "正岡 子規" },
    {
        $unset:
            { dob: "" }
    }
)

db.authors.find({dob: null})
// hit { "_id" : ObjectId("5b6ee1ee2ff9834cce648005"), "name" : "正岡 子規", "gender" : "male" }