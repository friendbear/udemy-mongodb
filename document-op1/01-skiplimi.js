db.books.find().sort({launch: -1})

db.books.find().sort({launch: -1}).skip(2)

db.books.find().sort({launch: -1}).skip(2).limit(3)