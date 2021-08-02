db.books.count()

db.books.count({publisher: "新朝社"})

db.books.find({publisher: "新朝社"}).count()