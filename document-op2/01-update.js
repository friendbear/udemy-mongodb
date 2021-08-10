// 著者与謝野晶子の誕生日を変更
db.authors.update(
    { name: "与謝野 晶子" },
    {
        $set: { dob: ISODate("1878-12-07T00:00:00+09:00") }
    }
)

db.authors.find({
    name: { $regex : /予/}
})