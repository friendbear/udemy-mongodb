db.books.find({
    launch: { $gt: ISODate("2003-01-01T00:00:00+09:00") }
})